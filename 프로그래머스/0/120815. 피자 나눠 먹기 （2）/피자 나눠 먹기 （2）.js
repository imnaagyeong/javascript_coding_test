// 6과 n의 최소공배수를 구하고 그걸 6으로 나눔
function solution(n) {
    var i = 1;
    while(1){
        if(i*6 % n === 0){
            break;
        }
        else{
            i++
        }
    }
    return Math.ceil(6*i/6);
}