function solution(myString) {
    return [...myString].map((v) => v.charCodeAt(0) < 108 ? "l" : v).join("");
}