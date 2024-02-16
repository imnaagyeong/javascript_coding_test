const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const [num, target] = input.map(Number);
const divisors = [];


for(let i = 1 ; i <= num ; i++){
    if(num % i === 0){
        divisors.push(i);
    }
}

console.log(divisors[target-1] === undefined ? 0 : divisors[target-1]);