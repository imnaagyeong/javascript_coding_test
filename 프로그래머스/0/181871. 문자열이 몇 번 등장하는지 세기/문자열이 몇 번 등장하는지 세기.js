function solution(myString, pat) {
    var result = 0;
    for(let i =0 ; i < myString.length - pat.length+1 ; i ++){
        var str = '';
        for(let j = i ; j < pat.length + i ; j++){
            str += myString[j];
        }
        console.log(str);
        if(str === pat){result += 1};
    }
    return result;
}