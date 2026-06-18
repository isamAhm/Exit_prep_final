import { PrismaClient } from "@prisma/client";
import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
import { join } from "path";

// Load .env explicitly if needed
dotenv.config({ path: join(process.cwd(), ".env") });

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL,
    },
  },
});

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateExplanation(
  stem: string,
  options: { A: string; B: string; C: string; D: string },
  answer: string,
  courseName: string,
  topicName: string
): Promise<string> {
  const prompt = `
You are an expert computer science professor writing an explanation for a multiple-choice question.
The question tests the topic "${topicName}" within the course "${courseName}".

Question:
${stem}

Options:
A) ${options.A}
B) ${options.B}
C) ${options.C}
D) ${options.D}

Correct Answer: ${answer}

Write a concise, educational explanation (2-4 sentences max) explaining *why* ${answer} is the correct answer and briefly why the other options are incorrect or less appropriate. Use markdown formatting if helpful (e.g., backticks for code). Do not include the options list again in your response, just provide the explanation.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text.trim();
  } catch (error) {
    throw error;
  }
}

async function main() {
  console.log("Fetching questions without detailed explanations...");
  // We identify generic explanations by checking if they start with "Correct answer:"
  const questionsToProcess = await prisma.question.findMany({
    where: {
      explanation: {
        startsWith: "Correct answer:",
      },
      // Optionally skip mock exam questions if their externalId starts with AAU-MOCK
      externalId: {
        not: {
          startsWith: "AAU-MOCK",
        },
      },
    },
    include: {
      course: true,
      topic: true,
    },
  });

  console.log(`Found ${questionsToProcess.length} questions to process in this batch.`);

  let successCount = 0;
  for (const q of questionsToProcess) {
    console.log(`\nGenerating explanation for question ${q.externalId}...`);
    
    let retries = 3;
    let explanation = "";
    while (retries > 0) {
      try {
        explanation = await generateExplanation(
          q.stem,
          { A: q.optionA, B: q.optionB, C: q.optionC, D: q.optionD },
          q.answer,
          q.course.name,
          q.topic.name
        );
        break; // Success
      } catch (err: any) {
        if (err.status === 429) {
          console.log("⚠️ Rate limit hit. Waiting 60 seconds before retrying...");
          await new Promise((resolve) => setTimeout(resolve, 60000));
          retries--;
        } else {
          console.error(`❌ Error on ${q.externalId}:`, err);
          break;
        }
      }
    }

    if (!explanation) {
      console.error(`❌ Exhausted retries for ${q.externalId} or hit unrecoverable error.`);
      continue; // Skip this question and move to the next one
    }

    await prisma.question.update({
      where: { id: q.id },
      data: { explanation },
    });

    console.log(`✅ Updated ${q.externalId}`);
    console.log(`Explanation preview: ${explanation.substring(0, 80)}...`);
    successCount++;
    
    // Delay 4 seconds to stay under 15 requests per minute limit
    await new Promise(resolve => setTimeout(resolve, 4000));
  }

  console.log(`\n🎉 Successfully processed ${successCount} questions.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
