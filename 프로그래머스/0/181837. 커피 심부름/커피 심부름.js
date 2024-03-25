// 아메리카노 4500원 , latte는 5000원
function solution(order) {
    return order.map((v) => v.indexOf("cafelatte") >= 0 ? 5000 : 4500).reduce((a,b) => a+b, 0);
}