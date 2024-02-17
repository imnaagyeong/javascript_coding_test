const fs=require('fs')
const input=fs.readFileSync(0).toString().trim().split('\n')

for(let i = 0 ; i < input.length-1 ; i++){
    const [a,b,c] = input[i].split(" ").map(Number).sort((a,b) => a-b);
    if(a+b > c){
        sum=a+b+c
        if(a=== b && b === c) console.log("Equilateral");
        else if(a=== b || b === c) console.log("Isosceles");
        else console.log("Scalene");
    } 
    else{
        console.log("Invalid");
    }
}