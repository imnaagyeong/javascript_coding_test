function solution(n) {
    var arr = [];
    for(let i = 0 ; i < n ; i++){
        arr[i] = new Array(n);
        for(let j = 0 ; j < n ; j ++){
            if(i === j){arr[i][j] = 1}
            else{arr[i][j] = 0}
        }
    }
    return arr;
}