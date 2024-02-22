const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const pocketmonMap = {};
for (let i = 1; i <= N; i++) {
    pocketmonMap[input[i]] = i;
}

let str = '';
for (let i = N + 1; i < input.length; i++) {
    const query = input[i];
    if (pocketmonMap.hasOwnProperty(query)) {
        str += pocketmonMap[query] + "\n";
    } else {
        str += input[parseInt(query)] + "\n";
    }
}

console.log(str);