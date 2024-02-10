const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [basket_num , input_num] = input[0].split(" ").map(Number);
let basket = [];
for (let i = 1; i <= basket_num; i++) {
    basket.push(i);
}

for(let i = 1 ; i <= input_num; i++){
    const [index1, index2] = input[i].split(" ").map(Number);
    const tmp = basket[index1-1];
    basket[index1-1] = basket[index2-1];
    basket[index2-1] = tmp;
}

console.log(basket.join(" "));