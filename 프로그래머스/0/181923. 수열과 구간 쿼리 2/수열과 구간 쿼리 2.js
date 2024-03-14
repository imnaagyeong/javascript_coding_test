function solution(arr, queries) {
    var result = [];
    for (let i = 0; i < queries.length; i++) {
        const [S, E, T] = queries[i];
        var num = [];
        for (let j = S; j <= E; j++) { 
            if (arr[j] > T) {
                num.push(arr[j]);
            }
        }
        if (num.length > 0) {
            result.push(Math.min(...num)); 
        } else {
            result.push(-1); 
        }
    }
    return result;
}