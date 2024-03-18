function solution(myString, pat) {
    const arr = myString.split("");
    const str = arr.map((v) => v === 'A' ? 'B' : 'A').join("");
    return str.indexOf(pat) === -1 ? 0 : 1;
}