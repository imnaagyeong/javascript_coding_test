function solution(myString, pat) {
    return (myString.toUpperCase()).indexOf(pat.toUpperCase()) === -1 ? 0 : 1;
}