const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
let sum = [];

for(let i = 0 ; i < N-2 ; i++){
    for(let j = i+1 ; j < N-1 ; j++){
        for(let z = j+1 ; z < N ; z++ ){
            if(nums[i] + nums[j] + nums[z] <= M){
                sum.push(nums[i] + nums[j] + nums[z]);
            }
        }
    }
} 
console.log(Math.max(...sum));
