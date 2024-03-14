function solution(arr, queries) {
    queries.map(([s,e,k]) => {
        const subarr = arr.slice(s, e+1).map((e, i) => k % i === 0 ? e+1 : e)
        arr.splice(s,e-s+1, ...subarr);
        })
    return arr;
}