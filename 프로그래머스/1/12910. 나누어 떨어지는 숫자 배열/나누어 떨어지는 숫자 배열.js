function solution(arr, divisor) {
    return arr.filter((e) => e % divisor === 0).sort((a,b) => a-b).length < 1 ? [-1] :arr.filter((e) => e % divisor === 0).sort((a,b) => a-b) ;
}