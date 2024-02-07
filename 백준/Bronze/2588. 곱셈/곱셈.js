const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(B / 10);
const one = B % 10;
const two = C % 10;
const three = parseInt(C / 10);

console.log(A * one);
console.log(A * two);
console.log(A * three);
console.log(A * B);