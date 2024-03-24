function solution(numbers, n) {
    var sum = 0;
    for(let i = 0 ; i < numbers.length ; i++){
        if(n < sum){
            break;
        }
        else{
            sum += numbers[i];
        }
    }
    return sum;
}