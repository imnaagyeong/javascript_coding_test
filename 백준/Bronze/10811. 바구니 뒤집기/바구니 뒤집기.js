const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [basket_num, count] = input[0].split(" ").map(Number); 
let basket = new Array(basket_num).fill(1).map((a, b) => a + b);

for(let i = 0; i < count; i++){
    const [start, end] = input[i+1].split(" ").map(Number); 
    let arr = basket.slice(start-1, end).reverse(); // 역순으로 잘라낸 부분
    basket.splice(start-1, end-start+1 ,...arr); // 시작인덱스, 잘라낼 요소의 개수, 대체할 요소들
}

console.log(basket.join(" "));