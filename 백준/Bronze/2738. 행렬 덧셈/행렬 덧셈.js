const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [row, column] = input[0].split(" ").map(Number);
const matrix1 = new Array(row);
const matrix2 = new Array(row);
const sum = new Array(row);

for (let i = 0; i < row; i++) {
    matrix1[i] = input[i + 1].split(" ").map(Number);
    matrix2[i] = input[i + row + 1].split(" ").map(Number);
    sum[i] = new Array(column);
}

for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
        sum[i][j] = matrix1[i][j] + matrix2[i][j];
    }
}

console.log(sum.map(row => row.join(" ")).join("\n"));