const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const start = input[0].split(" ");
let H = Number(start[0]);
let M = Number(start[1]);
const time = Number(input[1]);


M = time + M;
if(M >= 60){
    H += parseInt(M / 60);
    M %= 60;
    if(H > 23){ H -= 24;}
}

console.log(H + " " + M);