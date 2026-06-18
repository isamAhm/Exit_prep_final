/**
 * Imports the Exit Exam 2017 past paper into the database.
 * - Upserts each of the 99 questions (with verified explanations) as Question rows.
 * - Creates a PaperExam record so it appears in the Exam page alongside the AAU Mock.
 */
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import { join } from "path";
import {
  buildTopicAssigner,
  classifyType,
  computeDifficulty,
  topicBloomScore,
} from "../lib/classifier";
import { EXIT_EXAM_2017_QUESTIONS } from "../data/exit-exam-2017";

dotenv.config({ path: join(process.cwd(), ".env") });

const prisma = new PrismaClient({
  datasources: {
    db: { url: process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL },
  },
});

async function main() {
  console.log("Fetching courses and topics from database...");
  const courses = await prisma.course.findMany({ include: { topics: true } });

  // Build a global topic assigner across all courses (same as seed.ts for AAU mock).
  const allTopicsForAssigner: { name: string; slug: string; items: number; bloom: Record<string, number> }[] = [];
  const globalTopicMap: { courseId: number; courseName: string; topic: { id: number; name: string; bloom: Record<string, number> } }[] = [];

  for (const c of courses) {
    for (const t of c.topics) {
      allTopicsForAssigner.push({
        name: t.name,
        slug: t.slug,
        items: t.items,
        bloom: JSON.parse(t.bloom),
      });
      globalTopicMap.push({
        courseId: c.id,
        courseName: c.name,
        topic: { id: t.id, name: t.name, bloom: JSON.parse(t.bloom) },
      });
    }
  }

  const globalAssign = buildTopicAssigner(allTopicsForAssigner);

  console.log(`Upserting ${EXIT_EXAM_2017_QUESTIONS.length} questions from Exit Exam 2017...`);
  const questionIds: number[] = [];

  for (const q of EXIT_EXAM_2017_QUESTIONS) {
    const topicIdx = globalAssign(q.stem, q.options as Record<string, string>);
    const { courseId, courseName, topic } = globalTopicMap[topicIdx];
    const bloomScore = topicBloomScore(topic.bloom);
    const { difficulty, base, concepts } = computeDifficulty(
      q.stem,
      q.options as Record<string, string>,
      bloomScore,
    );
    const questionType = classifyType(q.stem);

    const externalId = `EXIT-2017-Q${q.num}`;
    const data = {
      qnum: q.num,
      stem: q.stem,
      optionA: q.options.A,
      optionB: q.options.B,
      optionC: q.options.C,
      optionD: q.options.D,
      answer: q.answer,
      explanation: q.explanation, // already verified explanations from the file
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
    questionIds.push(inserted.id);
    console.log(`  ✅ ${externalId} → ${courseName} / ${topic.name}`);
  }

  // Create / update the PaperExam record.
  await prisma.paperExam.upsert({
    where: { name: "Exit Exam 2017" },
    update: { questionIds: JSON.stringify(questionIds) },
    create: {
      name: "Exit Exam 2017",
      shortName: "2017",
      description:
        "Official MoE Software Engineering Exit Exam – 2017. 99 questions covering all blueprint themes with verified answers and detailed explanations.",
      questionIds: JSON.stringify(questionIds),
    },
  });

  console.log(`\n✔ Done! Imported ${questionIds.length} questions and created PaperExam "Exit Exam 2017".`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
