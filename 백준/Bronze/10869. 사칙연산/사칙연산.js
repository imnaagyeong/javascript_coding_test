const fs = require("fs");

const input = fs.readFileSync(0).toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const add = A + B;
const sub = A - B;
const mul = A * B;
const div = parseInt(A / B);
const remainder = A % B;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(remainder);