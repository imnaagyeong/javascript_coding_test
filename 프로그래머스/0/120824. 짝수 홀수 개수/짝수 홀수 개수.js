function solution(num_list) {
    const odd = num_list.filter((v) => v % 2 === 1).length;
    const even = num_list.filter((v) => v % 2 === 0).length;
    return [even, odd];
}