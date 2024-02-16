const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [M, N] = input.map(Number);
let nums = [];
let sum = 0;

for(let i = M; i <= N; i++){
    if(i <= 1){continue;}
    let isPrime = true;
    for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        nums.push(i);
        sum += i;
    }
}

console.log(nums.length === 0 ? "-1" : `${sum}\n${Math.min(...nums)}`);