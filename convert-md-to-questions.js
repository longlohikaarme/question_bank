const fs = require('fs');

// Helper: Convert number words to digit
const wordToNum = w => ({
  'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
  'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10
})[w.toLowerCase()] || parseInt(w,10) || null;

const md = fs.readFileSync('questions.md','utf-8');
const blocks = md.split(/^### /gm).filter(Boolean);
const questions = blocks.map(block => {
  // Split at first newline (question text) then choices as lines
  const [first, ...rest] = block.trim().split('\n');
  // Remove trailing empty lines
  while(rest.length && !rest[rest.length-1].trim()) rest.pop();

  // Choices are lines starting with *, after the question line
  const choices = rest
    .filter(line => /^\*\s?/.test(line))
    .map(line => line.replace(/^\*\s?/, '').trim());

  // Detect type/multiple
  let type = "single", max = undefined;
  const match = first.match(/choose (\w+)/i);
  if(match) {
    const n = wordToNum(match[1]);
    if(n && n > 1) { type = "multiple"; max = n; }
  }
  // Special: treat "best answer"/"all that apply"/other multi as multiple too
  if(/choose (the best|all|all that apply|multiple|more than one)/i.test(first))
    type = "multiple";

  // (Optional but nice: Capture 'max' for 'choose two/three/etc')
  let obj = { text: first.trim(), choices, type };
  if(type==="multiple" && max) obj.max = max;
  return obj;
});
fs.writeFileSync('questions.js','const questionBank = '+JSON.stringify(questions,null,2)+';\n');
console.log("Done! Wrote questions.js with", questions.length, "questions.");