const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");

const number = Number(input[0]);

for(let i = 1 ; i <= number; i++){
    const AB = input[i].split(" ").map(Number);
    console.log(AB[0]+AB[1]);
}