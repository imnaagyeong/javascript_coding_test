const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const str = new Set();
for(let i = 0 ; i < input.length ; i++){
    // i는 부분 문자열의 길이
    for(let j = i; j < input.length ; j++){
        if(str.has(input.slice(i, j+1)) === false){
            str.add(input.slice(i, j+1))
        }
    }
}
console.log(str.size);