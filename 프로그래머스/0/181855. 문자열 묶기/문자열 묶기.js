function solution(strArr) {
    const arr = strArr.map((v) => v.length);
    const nums = new Array(31).fill(0);
    for(let i = 0 ; i < arr.length ; i++){
        nums[arr[i]]++;
    }
    return Math.max(...nums);
}