function solution(numbers) {
    var arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    var answer = [];
    while(numbers !== ''){
        for(let i = 0 ; i < arr.length ; i ++){
        if(numbers.indexOf(arr[i]) === 0){
            answer.push(i);
            numbers = numbers.slice(arr[i].length);
            }
        }
        console.log(numbers);
    }
    return +answer.join("");
}