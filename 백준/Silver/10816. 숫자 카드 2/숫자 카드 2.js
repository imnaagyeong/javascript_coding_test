const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const havecards = input[1].split(" ").map(Number);
const matchcards = input[3].split(" ").map(Number);
let str = '';
let map = new Map();

for( i of havecards){
    if(map.has(i)){map.set(i, map.get(i) + 1);}
    else{ map.set(i , 1);}
}

for(j of matchcards){
    if(map.has(j)){
        str += map.get(j) + " ";
    }
    else{str += "0 ";}
}

console.log(str);