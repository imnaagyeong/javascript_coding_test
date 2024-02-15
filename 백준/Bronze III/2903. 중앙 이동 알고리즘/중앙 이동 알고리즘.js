const fs = require("fs");
const input = parseInt(fs.readFileSync(0).toString().trim());

let nums = [3]; 
for (let i = 1; i <= 15; i++) {
    nums.push(2 * nums[i - 1] - 1); 
}

const indexAdjusted = input - 1; 
const result = Math.pow(nums[indexAdjusted], 2); 

console.log(result);