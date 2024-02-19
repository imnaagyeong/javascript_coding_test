const fs =require("fs");
const input = fs.readFileSync(0).toString().trim();
const Target = Number(input);
let count = [];

for (let i = 0; i <= Math.floor(Target / 5); i++) {
    for (let j = 0; j <= Math.floor(Target / 3); j++) {
        if (Target === (i * 5 + j * 3)) {
            count.push(i+j);
        }
    }
}
console.log(count.length === 0 ? "-1" : Math.min(...count));