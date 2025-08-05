function solution(n) {
    let result = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && n / i === i) {
            result += i;
            continue;
        }
        
        if (n % i === 0) {
            result += i;
            result += n / i;
        }
    }
    
    return result;
}