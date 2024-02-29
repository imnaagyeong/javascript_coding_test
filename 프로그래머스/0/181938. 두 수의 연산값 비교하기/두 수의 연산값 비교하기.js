function solution(a, b) {
    return (Number(`${a}${b}`) >= (a*2*b) ?  Number(`${a}${b}`) : (a*2*b));
}