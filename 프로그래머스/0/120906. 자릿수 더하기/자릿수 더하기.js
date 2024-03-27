function solution(n) {
    var nums = String(n).split("");
    return nums.reduce((a,b) => Number(a)+Number(b),0);
}