function solution(a, b) {
    var answer = (a.toString()+b) > (b+a.toString()) ? (a.toString()+b) : (b+a.toString());
    return Number(answer);
}