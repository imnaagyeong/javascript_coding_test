function solution(i, j, k) {
    var str = "";
    for(let a = i ; a <= j ; a++){
        str += a;
    }
    return str.split("").filter((v) => v === String(k)).length;
}