function solution(my_string, is_prefix) {
    const arr = [];
    var token = 0;
    for(let i = 0 ; i < my_string.length ; i++){
        if(my_string.slice(0,i) === is_prefix){token = 1;}
        arr.push(my_string.slice(0,i));
    }
    return token;
}