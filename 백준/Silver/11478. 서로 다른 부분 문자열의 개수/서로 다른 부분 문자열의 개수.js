const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const str = new Set();
for(let i = 0 ; i < input.length ; i++){
    for(let j = i; j < input.length ; j++){
            str.add(input.slice(i, j+1))

    }
}
console.log(str.size);