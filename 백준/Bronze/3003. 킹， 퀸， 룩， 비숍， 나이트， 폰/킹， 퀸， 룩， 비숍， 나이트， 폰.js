const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ");
const counts = [1,1,2,2,2,8];
const needs = counts.map((ele, idx)=> ele - input[idx]);

console.log(needs.join(" "));