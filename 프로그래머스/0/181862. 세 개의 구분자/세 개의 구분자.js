function solution(myStr) {
    var arr = myStr.split("a");
    arr = arr.filter((v) => v !== 'b' & v !== 'c').join(" ");
    arr = arr.split("b");
    arr = arr.filter((v) => v !== 'c').join(" ");
    arr = arr.split("c").join(" ");
    arr = arr.split(" ");
    arr = arr.filter((v) => v !== '');
    return arr.length === 0 ? ["EMPTY"] : arr;
}