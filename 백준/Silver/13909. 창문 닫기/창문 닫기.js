const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const num = parseInt(input);

console.log(Math.floor(Math.sqrt(num)));