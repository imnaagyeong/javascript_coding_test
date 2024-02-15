const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [A,B,V] = input.map(Number);

console.log(Math.ceil((V - B) / (A - B)));