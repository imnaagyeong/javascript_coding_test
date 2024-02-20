const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const nums = input[1].split(" ").map(Number);
let index = [...new Set(nums)].sort((a,b) => a - b);;
let result = new Object();
let str = "";

for(let i = 0 ; i < index.length ; i++){
    result[index[i]] = i;
}
for(let val of nums){
    str += result[val] + " ";
}

console.log(str);