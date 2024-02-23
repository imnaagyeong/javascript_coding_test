const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let str = '';
// 최소 공배수 구하기
function lcm(a, b){
    return (a * b) / gcd(a,b);
}

// 최대 공약수 구하기 - 유클리드 호제법알고리즘 사용
function gcd(a, b){
    while(b != 0){
        [a, b] = [b, a % b];
    }
    return a;
}

for(let i = 1 ; i < input.length ; i++){
    const [a,b] = input[i].split(" ").map(Number);
    str += lcm(a,b) + "\n";
}

console.log(str);