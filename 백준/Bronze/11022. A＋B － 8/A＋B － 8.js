const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
let str = "";
for (let i = 0; i < Number(input[0]); i++) {
    const nums = input[i + 1].split(" ");
    const num1 = Number(nums[0]);
    const num2 = Number(nums[1]);
    console.log(`Case #${i+1}: ${num1} + ${num2} = ${num1+num2}`);
}
