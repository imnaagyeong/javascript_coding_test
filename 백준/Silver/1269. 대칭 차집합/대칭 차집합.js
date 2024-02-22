const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const result = new Set(input[1].split(" ").map(Number));
const target = input[2].split(" ").map(Number);

for(let i = 0 ; i < target.length ; i++){
    if(result.has(target[i])){
        result.delete(target[i]);
    }
    else{
        result.add(target[i]);
    }
}

console.log(result.size);