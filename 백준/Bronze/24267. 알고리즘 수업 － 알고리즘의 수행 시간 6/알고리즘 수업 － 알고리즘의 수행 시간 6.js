const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const result = (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6)
console.log(`${result}`);
console.log(3);