function solution(array) {
    return array.join("").split("").map((v) => v === "7" ? 1 : 0).reduce((a,b) => a+b,0);
}