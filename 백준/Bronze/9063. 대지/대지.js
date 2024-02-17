const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = [];
let y = [];
for(let i = 1 ; i < input.length ; i++){
    const [a, b] = input[i].split(" ").map(Number);
    x.push(a);
    y.push(b); 
}
const w = Math.abs(Math.max(...x) - Math.min(...x));
const h = Math.abs(Math.max(...y) - Math.min(...y));
console.log(w * h);