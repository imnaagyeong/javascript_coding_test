const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let [A,B] = input;
[A, B] = [A.split("").reverse().join(""), B.split("").reverse().join("")];
console.log(Number(A) > Number(B) ? A : B);