const fs = require('fs');

const wordToNum = w => ({
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10
})[w.toLowerCase()] || parseInt(w,10) || null;

const md = fs.readFileSync('scrum-questions.md','utf-8');
const blocks = md.split(/^### /gm).filter(Boolean);
const questions = blocks.map(block => {
  const [first, ...rest] = block.trim().split('\n');
  while(rest.length && !rest[rest.length-1].trim()) rest.pop();
  const choices = rest.filter(line => /^\*\s?/.test(line))
                     .map(line => line.replace(/^\*\s?/, '').trim());

  // -- Type detection block
  let type = "single", max;
  // Look for phrases that indicate multiple
  // Examples: 'choose the best two', 'choose two', 'choose three answers', etc.
  const chooseBestMatch = first.match(/choose the best (\w+)/i);
  const chooseNumMatch = first.match(/choose (\w+)/i);

  if (chooseBestMatch && chooseBestMatch[1]) {
      // e.g. "choose the best two" -> multiple, max: 2
      const n = wordToNum(chooseBestMatch[1]);
      if (n && n > 1) { type = "multiple"; max = n; }
      else { type = "single"; }
  } else if (chooseNumMatch && chooseNumMatch[1]) {
      // e.g. "choose three" or "choose two"
      const n = wordToNum(chooseNumMatch[1]);
      if (n && n > 1) { type = "multiple"; max = n; }
      else { type = "single"; }
  } else if (/choose all|choose multiple|choose more than one|select all|all that apply/i.test(first)) {
      type = "multiple";
  } else if (/choose the best/i.test(first)) {
      type = "single";
  }

  let obj = { text: first.trim(), choices, type };
  if(type==="multiple" && max) obj.max = max;
  return obj;
});

fs.writeFileSync('questions.js','const questionBank = '+JSON.stringify(questions,null,2)+';\n');
console.log("Done! Wrote questions.js with", questions.length, "questions.");