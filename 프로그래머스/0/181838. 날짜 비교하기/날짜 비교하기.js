function solution(date1, date2) {
    const D1 = new Date([...date1]);
    const D2 = new Date([...date2]);
    return D1<D2 ? 1 : 0;
}