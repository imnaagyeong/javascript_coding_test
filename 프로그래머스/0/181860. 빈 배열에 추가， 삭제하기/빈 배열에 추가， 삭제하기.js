function solution(arr, flag) {
    var answer = [];
    for(let i = 0 ; i < flag.length ; i++){
        if(flag[i]){
            for(let j = 0 ; j < 2 * arr[i] ; j++){
                answer.push(arr[i]);
            }
        }
        else{
            for(let j = 0 ; j < arr[i] ; j++){
                answer.pop();
            }
        }
    }
    return answer;
}