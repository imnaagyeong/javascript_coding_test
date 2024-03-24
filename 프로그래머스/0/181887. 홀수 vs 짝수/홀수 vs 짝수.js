function solution(num_list) {
    var odd = num_list.filter((v,i) => i % 2 === 1).reduce((a,b) => a+b,0);
    var even = num_list.filter((v,i) => i % 2 === 0).reduce((a,b) => a+b,0);
    return odd > even ? odd : even;
}