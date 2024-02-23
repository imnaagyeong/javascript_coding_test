const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const one = input[0].split(" ").map(Number);
const two = input[1].split(" ").map(Number);

let numerator = one[0] * two[1] + one[1] * two[0];
let denominator = one[1] * two[1];

function gcd(a,b){
    while(b != 0){
        [a,b] = [b, a%b];
    }
    return a;
}

console.log(`${numerator/gcd(numerator,denominator)} ${denominator/gcd(numerator,denominator)}`)