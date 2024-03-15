function solution(start_num, end_num) {
    var result = [];
    for(let i = end_num ; i <= start_num ; i++){
       result.push(i);
    }
    return result.sort((a,b) => b-a);
}