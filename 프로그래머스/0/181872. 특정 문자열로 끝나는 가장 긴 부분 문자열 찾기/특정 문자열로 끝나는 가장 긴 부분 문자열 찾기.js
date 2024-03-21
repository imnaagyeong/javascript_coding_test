function solution(myString, pat) {
    var result = [];
    while(myString.indexOf(pat) !== -1){
        result += myString.slice(0,myString.indexOf(pat)+pat.length);
        myString = myString.slice(myString.indexOf(pat)+pat.length);
    }
    
    return result;
}