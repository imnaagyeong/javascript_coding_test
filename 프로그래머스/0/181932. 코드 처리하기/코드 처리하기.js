function solution(code) {
    const str = code.split("");
    let mode = 0;
    let result = "";
    for(let i = 0 ; i < str.length ; i++){
        if(mode === 1){
            if(str[i] === '1'){mode = 0}
            else{
                if(i % 2 === 1){result += str[i]}
            }
        }
        else{
            if(str[i] === '1'){ mode = 1}
            else{
                if(i % 2 === 0){result += str[i]}
            }
        }
    }
    if(result.length === 0){result += "EMPTY"}
    return result;
}