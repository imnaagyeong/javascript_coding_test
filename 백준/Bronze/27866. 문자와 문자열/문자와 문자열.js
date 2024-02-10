const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const [str, target] = [input[0], Number(input[1])];
console.log(str[target-1]);