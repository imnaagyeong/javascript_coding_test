const fs = require("fs");
const input = fs.readFileSync(0 ,"utf8").trim().split("\n");
const completion = input.map(Number); // 과제낸 학생 번호
let not_completion = []; // 과제 안낸 학생 번호

for(let i = 1; i <= 30 ; i++){
    if(completion.indexOf(i) < 0){
        not_completion.push(i);
    }
}

not_completion.sort((a,b) => a - b);
console.log(not_completion.join("\n"));