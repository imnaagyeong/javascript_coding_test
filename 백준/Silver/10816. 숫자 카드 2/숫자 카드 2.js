const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const cards = input[1].split(" ").map(Number);
const targets = input[3].split(" ").map(Number);
const nums = {};
let str = '';
for(let i = 0 ; i < cards.length ; i++){
    if(nums[cards[i]] === undefined){
        nums[cards[i]] = 1;
    }else if(nums[cards[i]] >= 1)
    {
        nums[cards[i]] += 1;
    }
}
for(let i = 0 ; i < targets.length ; i++){
    str += (nums[targets[i]]===undefined ? 0 + " " : nums[targets[i]] + " ")
}
console.log(str);