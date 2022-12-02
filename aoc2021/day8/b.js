const fs = require("fs");

function syncReadFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  return contents;
}

const input = syncReadFile("./smallInput.txt");
const lines = input.split("\n");

let sum = 0;

function findMap(words) {
  const map = new Map();
  const interestingWords = [];
  words.forEach((word) => {
    switch (word.length) {
      case 2:
        return "aids";
      case 3:
        return 7;
      case 4:
        return 4;
      case 7:
        return 8;
      default:
        interestingWords.push(word);
    }
  });
}

function translate(word) {
  console.log(word);
  switch (word.length) {
    case 2:
      return 1;
    case 3:
      return 7;
    case 4:
      return 4;
    case 7:
      return 8;
    case 6: // 6 or 9 or 0
      return word.includes("g") ? (word.includes("f") ? 9 : 0) : 6;
    case 5: // 5 or 2 or 3
      return word.includes("e") ? (word.includes("b") ? 5 : 2) : 3;
  }
}

lines.forEach((line) => {
  const data = line.split("|");
  const mapping = data[0].trimEnd().split(" ");
  const output = data[1].trimStart().split(" ");

  const outputDigits = [];
  output.forEach((value) => {
    mapping.forEach((map) => {
      if (map.length == value.length) {
        if (map.split("").every((v) => value.includes(v))) {
          const translation = translate(map);
          console.log(translation);
          outputDigits.push(translation);
        }
      }
    });
  });
  console.log(outputDigits);
});

console.log(sum);
