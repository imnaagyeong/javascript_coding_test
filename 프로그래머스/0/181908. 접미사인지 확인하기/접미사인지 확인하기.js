function solution(my_string, is_suffix) {
    var result = [];
    var token = 0;
    for(let i = 0 ; i < my_string.length; i++ ){
        if(my_string.slice(i) === is_suffix){token = 1;}
        result.push(my_string.slice(i));
    }
    return token;
}