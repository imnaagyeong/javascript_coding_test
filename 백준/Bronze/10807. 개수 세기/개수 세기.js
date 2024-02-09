const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arrange = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const target = Number(input[2]);
let count = 0;

for(let i =0 ; i < arrange ; i++){
    if(nums[i] === target){
        count++;
    }
}
console.log(count);
