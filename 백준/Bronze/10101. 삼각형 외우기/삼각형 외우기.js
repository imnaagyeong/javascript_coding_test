const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let angles = input.map(Number);
const sum = angles.reduce((a, b) => a + b, 0);

if(sum === 180){
    angles = angles.sort();
    if(angles[0] === angles[2]){
        console.log("Equilateral");
    }
    else if(angles[0] === angles[1] || angles[1] === angles[2]){
        console.log("Isosceles");
    }
    else{
        console.log("Scalene");
    }
}
else{
    console.log("Error ");
}