function solution(a, b, c, d) {
    let result = 0;
    const num = [a,b,c,d].sort((a,b) => a-b);
    // 4개 다 같은 경우
    if(num[0] === num[3]){
        result = 1111*num[0];
    }
    // 4개 다 틀린 경우
    else if(num[0] !== num[1] && num[1] !== num[2] && num[2] !== num[3])       {
        result = num[0];
    }
    // 2개가 2그룹 같은경우
    else if(num[0] === num[1] && num[1] !== num[2] && num[2] === num[3])
    {
        result = (num[0] + num[3]) * (num[3] - num[0]);
    }
    // 3개가 나온경우 (첫번째 것만 다름)
    else if(num[0] !== num[1] && num[1] === num[2] && num[2] === num[3]){
        result = Math.pow(10*num[1]+num[0],2);
    }
    // 3개가 나온경우 (마지막 것만 다름)
    else if(num[0] === num[1] && num[1] == num[2] && num[2] !== num[3]){
        result = Math.pow(10*num[1]+num[3],2);
    }
    else if(num[0] === num[1]){result = num[2] * num[3]}
    else if(num[1] === num[2]){result = num[0] * num[3]}
    else if(num [2] === num[3]){result = num[0] * num[1]}
    return result;
}