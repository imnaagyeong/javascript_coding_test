const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const num = input[1].split("").map(Number);
const sum = num.reduce((a,b) => a + b, 0);

console.log(sum);