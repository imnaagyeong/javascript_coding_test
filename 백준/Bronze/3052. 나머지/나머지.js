const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const nums = input.map(Number);
let rests = [];

for(let i = 0 ;i< nums.length;i++){
    if(rests.indexOf(nums[i] % 42) < 0){
        rests.push(nums[i] % 42);
    }
}

console.log(rests.length);