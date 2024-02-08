const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ").map(Number);

const [A, B] = input;

if(A > B){
    console.log(">");
}
else if(A < B){
    console.log("<");
}
else{
    console.log("==");
}