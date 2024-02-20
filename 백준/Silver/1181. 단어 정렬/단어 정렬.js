const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let alphabet = [];
let token = [];
let str = [];
for(let i = 1 ; i < input.length ; i++){
    if(token.indexOf(input[i]) === -1){
        alphabet.push({
            string : input[i],
            length : input[i].length,
        });
        token.push(input[i]);
    }  
}

alphabet = alphabet.sort((a,b) => a.length - b.length === 0 ? a.string.localeCompare(b.string) : a.length - b.length)

for(let i = 0 ; i < alphabet.length ; i++){
    str.push(alphabet[i].string);
}

console.log(str.join("\n"));