function solution(str) {
    const arr = str.split(' ');
    let sum = +arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+') {
            sum += +arr[i + 1];
        }
        
        if (arr[i] === '-') {
            sum -= +arr[i + 1];
        }
    }
    
    return sum;
}