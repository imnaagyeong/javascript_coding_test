const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let nums = [];

for(let i = 1 ; i <= input.length-1 ;i++){
    if(nums.indexOf(input[i]) === -1){
        nums.push(input[i]);
    }
}
nums = nums.sort((a,b) => a-b);
console.log(nums.join("\n"));