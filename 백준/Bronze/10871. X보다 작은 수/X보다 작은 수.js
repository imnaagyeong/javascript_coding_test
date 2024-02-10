const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [arrange, target] = input[0].split(" ");
const count = input[1].split(" ").filter((e) => parseInt(e) < parseInt(target));

console.log(count.join(" "));