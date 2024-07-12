function solution(absolutes, signs) {
    return absolutes.map((e, i) => {
        return signs[i] ? e : -e;
    }).reduce((a,b) => a+b, 0);
}