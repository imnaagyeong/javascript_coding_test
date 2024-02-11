const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ");
const counts = [1,1,2,2,2,8];
const needs = [];

for(let i = 0; i < counts.length ; i++){
    needs[i] = counts[i] - input[i]
}

console.log(needs.join(" "));