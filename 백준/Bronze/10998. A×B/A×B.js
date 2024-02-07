const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().split(' ');

const mul = input.reduce((acc, cur) => acc * parseInt(cur), 1);

console.log(mul);