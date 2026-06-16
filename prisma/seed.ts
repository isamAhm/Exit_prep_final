// Seeds the database from data/blueprint.json + data/questions.json.
// Everything is deterministic: classification uses lib/classifier (no LLM).
import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import { join } from "path";
import {
  buildTopicAssigner,
  classifyType,
  computeDifficulty,
  makeExplanation,
  topicBloomScore,
} from "../lib/classifier";
import { slugify } from "../lib/utils";
import { NOTES } from "../lib/notes-content";
import { DEFAULT_USER_EMAIL } from "../lib/constants";

// Use the direct (unpooled) connection for seeding — avoids pool timeout
// when upserting thousands of rows in sequence.
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL,
    },
  },
});

interface BPTopic { name: string; items: number; bloom: Record<string, number> }
interface BPCourse {
  no: number; themeNo: number; name: string; creditHours: number;
  items: number; generalObjective: string; topics: BPTopic[];
}
interface Blueprint {
  exam: any;
  themes: { no: number; name: string; weight: number }[];
  courses: BPCourse[];
}
interface RawQ {
  courseNo: number; courseName: string; qnum: number;
  stem: string; options: Record<string, string>; answer: string;
}

async function main() {
  const dataDir = join(process.cwd(), "data");
  const bp: Blueprint = JSON.parse(readFileSync(join(dataDir, "blueprint.json"), "utf-8"));
  const questions: RawQ[] = JSON.parse(readFileSync(join(dataDir, "questions.json"), "utf-8"));

  // ---- Themes ----
  console.log("Upserting themes…");
  const themeIdByNo = new Map<number, number>();
  for (const t of bp.themes) {
    const row = await prisma.theme.upsert({
      where: { no: t.no },
      update: { name: t.name, weight: t.weight },
      create: { no: t.no, name: t.name, weight: t.weight },
    });
    themeIdByNo.set(t.no, row.id);
  }

  // ---- Courses + Topics + Notes ----
  console.log("Upserting courses, topics and notes…");
  const courseIdByNo = new Map<number, number>();
  // courseNo -> array of {id, name, items, bloom, slug} aligned to blueprint order
  const topicsByCourse = new Map<number, { id: number; name: string; items: number; bloom: Record<string, number>; slug: string }[]>();

  for (const c of bp.courses) {
    const course = await prisma.course.upsert({
      where: { no: c.no },
      update: {
        name: c.name,
        creditHours: c.creditHours,
        items: c.items,
        generalObjective: c.generalObjective,
        themeId: themeIdByNo.get(c.themeNo)!,
      },
      create: {
        no: c.no,
        name: c.name,
        creditHours: c.creditHours,
        items: c.items,
        generalObjective: c.generalObjective,
        themeId: themeIdByNo.get(c.themeNo)!,
      },
    });
    courseIdByNo.set(c.no, course.id);

    const courseTopicItems = c.topics.reduce((s, t) => s + t.items, 0) || 1;
    const courseNotes = NOTES[c.no] ?? [];
    const topicList: { id: number; name: string; items: number; bloom: Record<string, number>; slug: string }[] = [];

    for (let i = 0; i < c.topics.length; i++) {
      const t = c.topics[i];
      const slug = slugify(t.name);
      const topic = await prisma.topic.upsert({
        where: { courseId_slug: { courseId: course.id, slug } },
        update: {
          name: t.name,
          items: t.items,
          importance: t.items / courseTopicItems,
          bloom: JSON.stringify(t.bloom),
        },
        create: {
          name: t.name,
          slug,
          items: t.items,
          importance: t.items / courseTopicItems,
          bloom: JSON.stringify(t.bloom),
          courseId: course.id,
        },
      });
      topicList.push({ id: topic.id, name: t.name, items: t.items, bloom: t.bloom, slug });

      // Note for this topic (authored content aligned by index).
      const nc = courseNotes[i];
      if (nc) {
        const noteData = {
          title: t.name,
          slug,
          overview: nc.overview,
          keyConcepts: JSON.stringify(nc.keyConcepts),
          definitions: JSON.stringify(nc.definitions),
          examples: JSON.stringify(nc.examples),
          diagram: nc.diagram ?? "",
          examTips: JSON.stringify(nc.examTips),
          commonMistakes: JSON.stringify(nc.commonMistakes),
          orderIndex: i,
        };
        await prisma.note.upsert({
          where: { topicId: topic.id },
          update: noteData,
          create: { ...noteData, courseId: course.id, topicId: topic.id },
        });
      }
    }
    topicsByCourse.set(c.no, topicList);
  }

  // ---- Questions ----
  console.log(`Classifying and upserting ${questions.length} questions…`);
  const diffCount: Record<string, number> = {};
  const typeCount: Record<string, number> = {};

  for (const c of bp.courses) {
    const courseQs = questions.filter((q) => q.courseNo === c.no);
    const topicList = topicsByCourse.get(c.no)!;
    const assign = buildTopicAssigner(
      topicList.map((t) => ({ name: t.name, slug: t.slug, items: t.items, bloom: t.bloom })),
    );
    const courseId = courseIdByNo.get(c.no)!;

    for (const q of courseQs) {
      const topicIdx = assign(q.stem, q.options);
      const topic = topicList[topicIdx];
      const bloomScore = topicBloomScore(topic.bloom);
      const { difficulty, base, concepts } = computeDifficulty(q.stem, q.options, bloomScore);
      const questionType = classifyType(q.stem);
      diffCount[difficulty] = (diffCount[difficulty] ?? 0) + 1;
      typeCount[questionType] = (typeCount[questionType] ?? 0) + 1;

      const externalId = `C${q.courseNo}-Q${q.qnum}`;
      const data = {
        qnum: q.qnum,
        stem: q.stem,
        optionA: q.options.A ?? "",
        optionB: q.options.B ?? "",
        optionC: q.options.C ?? "",
        optionD: q.options.D ?? "",
        answer: q.answer,
        explanation: makeExplanation(q.answer, q.options, c.name, topic.name),
        difficulty,
        questionType,
        conceptCount: concepts,
        baseDifficulty: base,
        courseId,
        topicId: topic.id,
      };

      await prisma.question.upsert({
        where: { externalId },
        update: data,
        create: { externalId, ...data },
      });
    }
  }

  // ---- Default user ----
  console.log("Ensuring default user exists…");
  await prisma.user.upsert({
    where: { email: DEFAULT_USER_EMAIL },
    update: {},
    create: { name: "Student", email: DEFAULT_USER_EMAIL },
  });

  // ---- AAU Mock Exam ----
  console.log("Parsing and upserting AAU Mock Exam…");
  const mockContent = readFileSync(join(process.cwd(), "components/exam/AAUmock_answers.md"), "utf-8");
  const mockBlocks = mockContent.split("## Question ").slice(1);
  const mockParsed = mockBlocks.map(block => {
    const lines = block.split("\n");
    const qnumMatch = lines[0].match(/(\d+)/);
    const qnum = qnumMatch ? parseInt(qnumMatch[1]) : 0;
    
    let stem = "";
    let options: Record<string, string> = {};
    let answer = "";
    let explanation = "";
    
    let mode = "stem";
    let explanationLines = [];
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      if (mode === "stem") {
        if (line.match(/^- a\./i)) { mode = "options"; }
        else { stem += line + "\n"; }
      }
      
      if (mode === "options") {
        const optMatch = line.match(/^- ([a-d])\.\s*(.*)/i);
        if (optMatch) {
          options[optMatch[1].toUpperCase()] = optMatch[2];
        } else if (line.startsWith("**Answer:**")) {
          mode = "answer";
        }
      }
      
      if (mode === "answer") {
        if (line.startsWith("**Answer:**")) {
          const ansMatch = line.match(/\*\*Answer:\*\*\s*([a-d])\./i);
          if (ansMatch) answer = ansMatch[1].toUpperCase();
        } else if (line.startsWith("**Explanation:**")) {
          mode = "explanation";
        }
      }
      
      if (mode === "explanation") {
        if (!line.startsWith("**Explanation:**")) {
          explanationLines.push(line);
        }
      }
    }
    
    return { qnum, stem: stem.trim().replace(/^\*\*|\*\*$/g, ''), options, answer, explanation: explanationLines.join("\n") };
  });

  const allTopicsForAssigner = [];
  const globalTopicMap = [];
  for (const c of bp.courses) {
    const topicList = topicsByCourse.get(c.no)!;
    for (const t of topicList) {
      allTopicsForAssigner.push({ name: t.name, slug: t.slug, items: t.items, bloom: t.bloom });
      globalTopicMap.push({ courseId: courseIdByNo.get(c.no)!, courseName: c.name, topic: t });
    }
  }
  const globalAssign = buildTopicAssigner(allTopicsForAssigner);

  const mockIds: number[] = [];
  for (const q of mockParsed) {
    if (!q.answer) continue; // skip if parse failed
    const topicIdx = globalAssign(q.stem, q.options);
    const { courseId, courseName, topic } = globalTopicMap[topicIdx];
    const bloomScore = topicBloomScore(topic.bloom);
    const { difficulty, base, concepts } = computeDifficulty(q.stem, q.options, bloomScore);
    const questionType = classifyType(q.stem);

    const externalId = `AAU-MOCK-Q${q.qnum}`;
    const data = {
      qnum: q.qnum,
      stem: q.stem,
      optionA: q.options.A ?? "",
      optionB: q.options.B ?? "",
      optionC: q.options.C ?? "",
      optionD: q.options.D ?? "",
      answer: q.answer,
      explanation: makeExplanation(q.answer, q.options, courseName, topic.name) + "\n\n" + q.explanation,
      difficulty,
      questionType,
      conceptCount: concepts,
      baseDifficulty: base,
      courseId,
      topicId: topic.id,
    };

    const inserted = await prisma.question.upsert({
      where: { externalId },
      update: data,
      create: { externalId, ...data },
    });
    mockIds.push(inserted.id);
  }

  await prisma.paperExam.upsert({
    where: { name: "AAU Mock Exam 2015" },
    update: { questionIds: JSON.stringify(mockIds) },
    create: {
      name: "AAU Mock Exam 2015",
      shortName: "AAU Mock",
      description: "A past comprehensive mock exam containing 89 questions covering core software engineering topics.",
      questionIds: JSON.stringify(mockIds)
    }
  });

  // ---- Summary ----
  const totalQ = await prisma.question.count();
  console.log("\n✔ Seed complete");
  console.log(`  themes:    ${bp.themes.length}`);
  console.log(`  courses:   ${bp.courses.length}`);
  console.log(`  topics:    ${await prisma.topic.count()}`);
  console.log(`  notes:     ${await prisma.note.count()}`);
  console.log(`  questions: ${totalQ}`);
  console.log(`  difficulty mix: ${JSON.stringify(diffCount)}`);
  console.log(`  type mix:       ${JSON.stringify(typeCount)}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
