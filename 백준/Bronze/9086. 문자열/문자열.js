const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
    console.log(input[i][0]+input[i][input[i].length - 1]);
}