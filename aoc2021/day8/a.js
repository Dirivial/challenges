const fs = require("fs");

function syncReadFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  return contents;
}

const input = syncReadFile("./input.txt");
const lines = input.split("\n");

let sum = 0;

const arr = [2, 4, 7, 3];

lines.forEach((line) => {
  const outputValues = line.split("|")[1].trimStart().split(" ");

  outputValues.forEach((value) => {
    if (arr.includes(value.length)) {
      sum += 1;
    }
  });
});

console.log(sum);
