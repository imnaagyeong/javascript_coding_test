function solution(n) {
    const arr = [];
    while(n !== 1){
        if(n % 2 === 0){
            arr.push(n);
            n = n / 2;
        }
        else{
            arr.push(n);
            n = 3*n+1;
            }
    }
    arr.push(1);
    return arr;
}