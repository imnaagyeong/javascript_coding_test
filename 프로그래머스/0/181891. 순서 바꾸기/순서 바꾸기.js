function solution(num_list, n) {
    return (num_list.slice(n).join("") + num_list.slice(0,n).join("")).split("").map(Number);
}