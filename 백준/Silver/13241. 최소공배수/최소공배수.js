const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

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

const [a,b] = input.split(" ").map(e => parseInt(e));
console.log(lcm(a,b));