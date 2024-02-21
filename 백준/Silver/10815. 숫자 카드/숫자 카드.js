const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const nums = new Set(input[1].split(" ").map(Number).sort((a,b) => a-b));
const targets = input[3].split(" ").map(Number);
let str = "";

for(let i = 0 ; i < targets.length ; i++){
   if(nums.has(targets[i])){str += "1 ";}
   else{str += "0 ";}
}

console.log(str);