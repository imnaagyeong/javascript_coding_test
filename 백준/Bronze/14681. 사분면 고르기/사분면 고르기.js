const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n").map(Number);

const [A,B] = input;

if(A>0){
    if(B>0){console.log("1");}
    else{console.log("4");}
}
else{
    if(B>0){console.log("2");}
    else{console.log("3");}
}
