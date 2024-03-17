function solution(binomial) {
    const arr = binomial.split(" ");
    const a = Number(arr[0]);
    const b = Number(arr[2])
    return arr[1] === '+' ? a+b : arr[1] === '-' ? a-b : a*b;
}