function solution(my_str, n) {
    var answer = [];
    for(let i = 0 ; i < my_str.length ; i ++){
        answer.push(my_str[i]);
        if(i % n === n-1){
             answer.push("/");
        }
    }
    return answer.join("").split("/").filter((v) => v !== "");
}