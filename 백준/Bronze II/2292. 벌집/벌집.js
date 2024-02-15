const fs = require("fs");
const input = +fs.readFileSync(0).toString().trim();

let i = 1;
let token = 1;

// token이 input보다 작을때 반복
while(token < input){
    token += 6*i;
    i++;
}

console.log(i);