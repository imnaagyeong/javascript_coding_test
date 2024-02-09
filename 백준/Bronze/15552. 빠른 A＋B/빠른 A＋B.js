const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
let str = "";
for (let i = 0; i < Number(input[0]); i++) {
    const nums = input[i + 1].split(" ");
    str += Number(nums[0]) + Number(nums[1]) + "\n";
}
console.log(str);