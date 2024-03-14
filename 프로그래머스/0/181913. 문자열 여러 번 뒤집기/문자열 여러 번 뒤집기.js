function solution(my_string, queries) {
    const str = my_string.split("");
    queries.map(([s,e]) => str.splice(s, e-s+1, ...str.slice(s,e+1).reverse()));
    return str.join("");
}