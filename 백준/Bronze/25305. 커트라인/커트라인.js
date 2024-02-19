const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let score = input[1].split(" ").map(Number);
score = score.sort((a,b) => b-a);
console.log(score[K-1]);