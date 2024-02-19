const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let nums = input.map(Number);
nums = nums.sort((a,b) => a-b);
let sum = nums.reduce((a,b) => a + b , 0);


console.log(sum / 5);
console.log(nums[2]);
