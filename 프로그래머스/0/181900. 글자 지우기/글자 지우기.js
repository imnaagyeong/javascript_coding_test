function solution(my_string, indices) {
    const str = my_string.split("");
    indices.map((e) => str[e] = null);
    return str.join("");
}