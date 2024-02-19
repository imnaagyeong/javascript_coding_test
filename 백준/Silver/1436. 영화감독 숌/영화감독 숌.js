const fs =require("fs");
const input = fs.readFileSync(0).toString().trim();
let N = Number(input);
let num = 666;
let count = 1;
while (count !== N) {
    num++;
    if (String(num).includes("666")) count++;
}
console.log(num);