const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let str = "";
for(let i = 1 ; i <=  parseInt(input) ; i++){
    str += "*";
    console.log(str);
}