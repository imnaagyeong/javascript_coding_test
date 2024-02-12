const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const c_alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]; // 크로아티아 알파벳 리스트
let count = 0; // 크로아티아 알파벳 갯수
let sum = 0;
let token = 0;
while(token !== c_alphabet.length){
    token = 0;
    for (let i = 0; i < c_alphabet.length; i++) {
        if (input.indexOf(c_alphabet[i]) === 0) {
            input = input.slice(c_alphabet[i].length, );
            count ++;
            break;
        } else if(input.indexOf(c_alphabet[i]) > 0){
            const start = input.indexOf(c_alphabet[i]);
            const end = input.indexOf(c_alphabet[i]) + c_alphabet[i].length
            input = input.slice(0, start) + " "+input.slice(end, );
            count ++;
            break;
        }
        else{ token ++; }
    }
}
    
const alphabet = input.split(" ");
for(let i = 0 ; i< alphabet.length ; i ++){
    sum += alphabet[i].length;
}
console.log(count + sum);
