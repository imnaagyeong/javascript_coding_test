const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");

const money = Number(input[0]);
const number = Number(input[1]);
let sum = 0;
for(let i = 0 ; i < number ; i++){
    const product = input[i+2].split(" ");
    sum += product[0]*product[1];
}
if(sum === money){
    console.log("Yes");
}
else{
    console.log("No");
}