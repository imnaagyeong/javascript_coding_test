const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const nums = input[1].split(" ").map(Number);
const max = Math.max(...nums); // ...nums 배열을 펼쳐서 전달한다.
const min = Math.min(...nums);


console.log(`${min} ${max}`);