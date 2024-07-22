function solution(a, b) {
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    
    let totalDays = 0;
    for (let i = 0; i < a - 1; i++) {
        totalDays += daysInMonth[i];
    }
    totalDays += b - 1;

    return daysOfWeek[totalDays % 7];
}