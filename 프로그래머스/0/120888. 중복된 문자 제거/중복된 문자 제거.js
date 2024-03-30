function solution(my_string) {
    var arr = my_string.split("");
    var result = [];
    
    for(let i = 0 ; i < my_string.length ; i++){
        if(result.indexOf(my_string[i]) === -1){
            result.push(my_string[i]);
        }
    }
    
    return result.join("");
}