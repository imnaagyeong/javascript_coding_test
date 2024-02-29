function solution(ineq, eq, n, m) {
    const str = eq === '=' ? ineq+eq : ineq;
    return eval(`${n} ${str} ${m}`) ? 1 : 0;
}