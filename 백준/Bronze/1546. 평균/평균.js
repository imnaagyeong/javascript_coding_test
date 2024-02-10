const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const scores = input[1].split(" ").map(Number); 
const max = Math.max(...scores);
const sum = scores.reduce((acc, curr) => acc + curr, 0);

console.log((sum * 100) / (max * Number(input[0])) );

