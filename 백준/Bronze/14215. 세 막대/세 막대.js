const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let [a, b, c] = input.sort((a, b) => a - b).map(Number);
if (a + b > c) {
    console.log(a + b + c);
} else {
    c = a + b - 1;
    console.log(a + b + c);
}