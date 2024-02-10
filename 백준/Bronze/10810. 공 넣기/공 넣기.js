const fs = require("fs");
const input = fs.readFileSync(0 ,"utf8").trim().split("\n");
const [basket_num, input_num] = input[0].split(" ").map(Number);
let basket = new Array(basket_num).fill(0); // 바구니 0으로 초기화

for(let i = 1; i <= input_num ; i ++){
    const [start, end, count] = input[i].split(" ").map(Number);
    for(let j = start-1 ; j < end ; j++){
        basket[j] = count;
    }
}

console.log(basket.join(" "));