const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let person = [];
let str = [];
for(let i = 1 ; i < input.length ; i++){
    const [a,b] = input[i].split(" ");
    person.push({
            age : Number(a),
            name : b,
    });
}  

person = person.sort((a,b) => a.age - b.age);
for(let i = 0 ; i < person.length ; i++){
    str.push(person[i].age + " " + person[i].name);
}

console.log(str.join("\n"));