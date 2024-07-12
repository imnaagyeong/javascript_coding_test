function solution(arr) {
    var min = Math.min(...arr);
    return arr.filter((e) => e !== min).length < 1 ? [-1] : arr.filter((e) => e !== min);
}