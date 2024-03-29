function solution(s) {
    var arr = new Array(26).fill(0);
    var result = [];
    s.split("").map((v) => arr[v.charCodeAt(0) - 97] += 1);
    for(let i = 0 ; i < 26 ; i++){
        if(arr[i] === 1){
            result.push(String.fromCharCode(i+97));
        }
    }
    return result.join("");
}