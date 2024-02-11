const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let alphabet = new Array(26).fill(-1);

for(let i = 97 ; i <= 122 ; i ++){
    const index = input.indexOf(String.fromCharCode(i));
    if(index > -1){
        alphabet[i-97] = index;
    }
}

console.log(alphabet.join(" "));