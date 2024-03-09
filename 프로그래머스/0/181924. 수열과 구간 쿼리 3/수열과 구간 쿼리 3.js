function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        let startIndex = queries[i][0];
        let endIndex = queries[i][1];
        let temp = arr[startIndex];

        arr[startIndex] = arr[endIndex];
        arr[endIndex] = temp;
    }

    return arr;
}