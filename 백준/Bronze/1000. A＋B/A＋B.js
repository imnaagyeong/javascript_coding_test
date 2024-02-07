const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let sum = 0;

rl.on("line", (line)=> {
    input.push(...line.split(' ').map(e => parseInt(e)));
});


rl.on('close',()=>{
    sum = input.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
    process.exit();
});
