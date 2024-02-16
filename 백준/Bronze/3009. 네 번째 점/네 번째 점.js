
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = [];
let y = [];

for(let i = 0 ; i < 3 ; i++){
    const [A, B] = input[i].split(" ").map(Number);
    x.push(A);
    y.push(B);
}
x = x.sort();
y = y.sort();

let result_x = (x[0] === x[1] ? x[2] : x[0]);
let result_y = (y[0] === y[1] ? y[2] : y[0]);
console.log(result_x + " " + result_y);