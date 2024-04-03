function solution(n) {
    var fac = 1;
    var i = 1;
    while(n >= fac){
        fac = fac * i;
        i++;
    }
    return i-2;
}