const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const Original = new Set(input.slice(1,N+1));
const Target = input.slice(N+1);
let count = 0;
for(let i = 0 ; i < Target.length ; i++){
    if(Original.has(Target[i])){
        count ++;
    }
}

console.log(count);