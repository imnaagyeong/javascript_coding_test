const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0 ; i < input.length ; i++){
    const nums = input[i].split(" ");
    console.log(Number(nums[0]) + Number(nums[1]));
}