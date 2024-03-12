function solution(q, r, code) {
    const arr = code.split(""); 
    return arr.filter((value, index) => index % q === r).join("");
}