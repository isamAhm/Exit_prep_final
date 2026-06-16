import { readFileSync } from "fs";

const content = readFileSync("components/exam/AAUmock_answers.md", "utf-8");
const blocks = content.split("## Question ").slice(1);

const parsed = blocks.map(block => {
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

console.log(`Parsed ${parsed.length} questions`);
console.log(parsed[0]);
