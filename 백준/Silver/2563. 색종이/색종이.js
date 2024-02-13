const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split("\n");

const testCaseNum = input[0];
var arr = new Array();
for (let z=1; z<=testCaseNum; z++) {
    arr[z-1] = input[z].split(" "); 
}

function solution(testCaseNum, arr){
    const row = 100;
    const col = 100;
    let count = 0; //넓이
    const whiteArr = Array.from(new Array(col), ()=> new Array(row).fill(0));
    for(let i=0; i<testCaseNum; i++){
        const a = parseInt(arr[i][0]); //x
        const b = parseInt(arr[i][1]); //y
        for(let j=0; j<10; j++){ 
            for(let k=0; k<10; k++){ 
                if (whiteArr[a+k][b+j] == 1){ //지금 좌표가 이미 검은색이면 패스
                    continue;
                }
                whiteArr[a+k][b+j] = 1;
                count++;
            }
        }
    }
    console.log(count);
}

solution(testCaseNum, arr);