function solution(a, b) {
    const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let totalDays = b;
    for (let i = 0; i < a - 1; i++) {
        totalDays += daysInMonth[i];
    }
    
   let result = (totalDays - 1) % 7;
   return days[result];  
}