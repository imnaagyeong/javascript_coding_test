const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const nums = input[1].split(" ").map(Number);
let count = 0;

for(let i = 0 ; i < nums.length ; i++){
    if(nums[i] <= 1){continue;}
    let isPrime = true;
    for(let j = 2 ; j <= Math.sqrt(nums[i]) ; j++){
        if(nums[i] % j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime) count++;
}

console.log(count);