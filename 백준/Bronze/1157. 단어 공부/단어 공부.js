const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const str = input.toUpperCase().split("");
const aplhabet = new Array(26).fill(0);
let max_str = [];
for(let i = 0 ; i < str.length ; i ++){
    aplhabet[str[i].charCodeAt()- 65] += 1;
}
const max = Math.max(...aplhabet);
for(let i = 0 ; i < 26 ; i++){
    if(aplhabet[i] === max){
        max_str.push(String.fromCharCode(i+65));
    }
}

console.log( max_str.length === 1 ? max_str+"" : "?");