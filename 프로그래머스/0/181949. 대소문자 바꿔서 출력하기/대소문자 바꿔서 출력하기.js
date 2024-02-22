const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split("");
    for(let i = 0 ; i < str.length ; i++){
        // 대문자이므로 소문자로 바꿔야함
        if(str[i] === str[i].toUpperCase()){
            str[i] = str[i].toLowerCase();
        }
        //소문자이므로 대문자로 바꿔야함
        else{
            str[i] = str[i].toUpperCase();
        }
    }
    console.log(str.join(""));
});