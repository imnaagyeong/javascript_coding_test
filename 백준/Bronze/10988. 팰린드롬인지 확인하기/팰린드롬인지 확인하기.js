const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const str = input.split("");

if(str.join("") === str.reverse().join("")){
    console.log(1);
}
else{
    console.log(0);
}