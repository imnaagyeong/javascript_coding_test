const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const number = Number(input) / 4;
let str = [];
for (let i = 0 ; i < number ; i++){
    str.push("long ");
}
str.push("int");
console.log(str.join(''));