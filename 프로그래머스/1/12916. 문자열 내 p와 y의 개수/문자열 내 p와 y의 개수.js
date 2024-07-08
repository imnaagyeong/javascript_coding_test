function solution(s) {
    var pnum = 0;
    var ynum = 0;
    s.toLowerCase().split("").forEach((e) => {
        if (e === "p") {
            pnum++;
        } else if (e === "y") {
            ynum++;
        }
    });
    return pnum === ynum;
}