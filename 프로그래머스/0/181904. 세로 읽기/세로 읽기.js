function solution(my_string, m, c) {
    const arr = my_string.split("");
    let result = '';
    
    for(let i = c-1 ; i < my_string.length ; i += m){
        result += arr[i];
    }
    
    return result;
}