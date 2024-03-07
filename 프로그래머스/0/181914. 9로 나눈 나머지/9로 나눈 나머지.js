function solution(number) {
    let sum = number.split("").map(Number).reduce((a,b) => a+b ,0);
    return sum % 9;
}