function solution(myString) {
    var answer = myString.split("");
    answer = answer.map((e) => e === 'a' || e === 'A' ? 'A' : e.toLowerCase());
    return answer.join("");
}