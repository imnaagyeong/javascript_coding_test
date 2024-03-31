function solution(emergency) {
    var sortedEmergency = emergency.slice().sort((a, b) => b - a);
    return emergency.map((v) => sortedEmergency.indexOf(v) + 1);
}