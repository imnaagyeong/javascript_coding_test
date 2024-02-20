const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let person = [];

for(let i = 1 ; i < input.length ; i++){
    const [a,b] = input[i].split(" ");
    person.push({
            age : Number(a),
            name : b,
    });
}  

person = person.sort((a,b) => a.age - b.age);

person.forEach((e) => console.log(e.age +" "+ e.name));