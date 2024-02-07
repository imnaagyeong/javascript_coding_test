const fs = require("fs");

const input = fs.readFileSync(0).toString();
const number = parseInt(input);

console.log(number - 543);