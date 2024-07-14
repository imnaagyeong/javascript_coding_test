function solution(x) {
    return x % (String(x).split("").map(e => Number(e)).reduce((a,b) => a+b,0)) === 0 ? true : false ;
}