function cal(str, n){
    switch(str){
        case "w": n += 1;
            break;
        case "s": n -= 1;
            break;
        case "d": n += 10;
            break;
        case "a": n -= 10;
            break;
    }
    
    return n;
}

function solution(n, control) {
    const str = control.split("");
    for(let i = 0 ; i < str.length ; i++){
        n = cal(str[i], n);
    }
    return n;
}