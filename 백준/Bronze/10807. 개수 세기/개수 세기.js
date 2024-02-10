const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const count = input[1].split(" ").filter((e) => e === input[2]).length;

console.log(count);