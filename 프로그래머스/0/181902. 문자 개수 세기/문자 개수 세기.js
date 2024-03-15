function solution(my_string) {
    var UpperCase = new Array(26).fill(0);
    var LowerCase = new Array(26).fill(0);
    var str = my_string.split("");
    str.map((e) => {
        var charCode = e.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { // 대문자
            UpperCase[charCode - 65]++;
        } else if (charCode >= 97 && charCode <= 122) { // 소문자인
            LowerCase[charCode - 97]++;
        }
    });
    return UpperCase.concat(LowerCase);
}