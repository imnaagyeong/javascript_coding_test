const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let exist = new Set();

for(let i = 1 ; i < input.length ; i++){
    const [name , state] = input[i].split(" ");
    if(state === 'enter'){exist.add(name)}
    else if(state === 'leave'){exist.delete(name)}
}


console.log([...exist].sort().reverse().join("\n"));