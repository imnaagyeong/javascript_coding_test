const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);

const nums = [];

for(let i = n ; i > 0 ; i--){
    const target = String(i).split("");
    const m = target.map(Number);
    let sum = 0;
    for(let j = 0 ; j < m.length ; j++){
        sum += m[j];
    }
    sum += i;
    if(sum === n){
        nums.push(i);
    }
}

console.log(nums.length === 0 ? 0 : Math.min(...nums));