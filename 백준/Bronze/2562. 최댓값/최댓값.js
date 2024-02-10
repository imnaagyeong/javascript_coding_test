const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const nums = input.map(Number);
const max = Math.max(...nums);

let index = -1;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
        index = i;
        break;
    }
}

console.log(`${max}\n${index+1}`);