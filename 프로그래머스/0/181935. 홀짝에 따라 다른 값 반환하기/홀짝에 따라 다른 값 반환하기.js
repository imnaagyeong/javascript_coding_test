function solution(n) {
    let i = n % 2 === 0 ? 2 : 1;
    let sum = 0;
    for( ; i <= n ; i += 2){
        if(n % 2 === 0){
            sum += Math.pow(i,2);
        }
        else{
            sum += i;
        }
        
    }
    return sum;
}