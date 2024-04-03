function solution(my_string) {
    return [...my_string].map((v) => parseInt(v)).filter((v) => v >= 0).reduce((a,b) => a+b, 0);
}