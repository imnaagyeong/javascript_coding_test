const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
    let new_str = '';
    const [count, str] = input[i].split(" ");
    for (let j = 0; j < str.length; j++) {
        new_str += str[j].repeat(Number(count));
    }
    console.log(new_str);
}