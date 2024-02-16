const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");


for(let i = 0 ; i < input.length -1 ; i++){
    const target = Number(input[i]);
    let divisors = [];
    let sum = 0;
    for(let i = 1 ; i < target ; i++){
        if(target % i === 0){
            divisors.push(i);
            sum += i;
        }
    }
    if(sum === target){
        console.log(target + " = " + divisors.join(" + "));
    }
    else{
        console.log(target + " is NOT perfect.")
    }
}