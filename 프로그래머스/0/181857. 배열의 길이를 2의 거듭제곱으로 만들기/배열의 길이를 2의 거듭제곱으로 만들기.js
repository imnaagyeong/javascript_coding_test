function solution(arr) {
    let nextPowerOfTwo = 1;
    while (nextPowerOfTwo < arr.length) {
        nextPowerOfTwo *= 2;
    }

    const zerosToAdd = nextPowerOfTwo - arr.length;
    for (let i = 0; i < zerosToAdd; i++) {
        arr.push(0);
    }

    return arr;
}