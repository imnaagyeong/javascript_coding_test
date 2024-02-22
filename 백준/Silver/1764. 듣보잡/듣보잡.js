const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const notlisten = new Set(input.slice(1, N+1));
const result = [];
for(let i = N+1 ; i < input.length ; i++){
    if(notlisten.has(input[i])){
        result.push(input[i]);
    }
}
console.log(result.length);
console.log(result.sort().join("\n"));