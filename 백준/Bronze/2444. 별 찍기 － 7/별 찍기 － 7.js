const fs = require("fs");
const input = fs.readFileSync(0).toString();
const num = Number(input);
let str = [];

for(let i = 1 ; i <= num ; i ++){
    str.push(" ".repeat(num-i) + "*".repeat(2*i - 1));
    console.log(str[i-1]);
}
for(let i = num-2 ; i >= 0; i--){
    console.log(str[i]);
}
