function solution(num_list) {
    const sum = num_list.reduce((a, b) => a + b, 0);
    const product = num_list.reduce((a, b) => a * b, 1);
    return product < Math.pow(sum,2) ? 1 : 0;
}