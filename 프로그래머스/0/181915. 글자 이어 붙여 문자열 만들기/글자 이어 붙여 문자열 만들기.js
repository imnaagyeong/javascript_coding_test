function solution(my_string, index_list) {
    const arr = my_string.split("");
    var answer = '';
    for (const i of index_list) {
        answer += arr[i];
    }
    return answer;
}