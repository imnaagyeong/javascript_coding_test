const fs = require("fs");
const [A,B,C] = fs.readFileSync(0, "utf8").split(" ").map(Number);
let money;
let max;
if(A === B && B === C){money = 10000 + A * 1000} // 3게 일치
else if(A === B || A === C ){money = 1000 + A * 100} // 2개일치
else if(B === C ){money = 1000 + B * 100} // 2개일치
else{
    max = A>B ? A : B;
    max = max > C ? max : C;
    money = max * 100;
}
console.log(money);