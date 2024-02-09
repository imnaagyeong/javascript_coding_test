const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const number = Number(input);
let sum = 0;
for(let i = 1; i <= number ;i ++){
    sum += i;
}
console.log(sum);