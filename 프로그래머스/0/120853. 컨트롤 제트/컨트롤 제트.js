function solution(s) {
    const arr = s.split(' ');
    
    let sum = 0;
    let prevNum = 0;
    
    arr.forEach(item => {
        if (item !== 'Z') {
            sum += Number(item);
            prevNum = item;
        } else {
            sum -= Number(prevNum);
        }
    })
    
    return sum;
}