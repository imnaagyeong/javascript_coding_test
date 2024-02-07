const fs = require("fs");
const input = fs.readFileSync(0).toString().split(' ');

const div = input.slice(1).reduce((acc, cur) => acc / parseInt(cur),parseInt(input[0]));

console.log(div);