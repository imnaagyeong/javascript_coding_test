const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let max = -Infinity;
let maxRowIndex = -1;
let maxColIndex = -1;

for (let i = 0; i < 9; i++) {
    input[i] = input[i].split(" ").map(Number);
    for (let j = 0; j < 9; j++) {
        if (input[i][j] > max) {
            max = input[i][j];
            maxRowIndex = i;
            maxColIndex = j;
        }
    }
}

console.log(max);
console.log(`${maxRowIndex + 1} ${maxColIndex + 1}`);