const fs =require("fs");
let input = +fs.readFileSync(0).toString().trim();

let result = [];
for (let i = 2; i <= input; i++) {
  while (input % i === 0) {
    input = input / i;
    result.push(i);
  }
}
console.log(result.join("\n"));