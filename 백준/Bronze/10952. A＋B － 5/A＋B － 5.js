const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
let i = 0;
while (true) {
    if (input[i] === "0 0") {
        break;
    }
    const nums = input[i].split(" ");
    console.log(Number(nums[0]) + Number(nums[1]));
    i++;
}