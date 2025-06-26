function solution(n) {
    const arr = [];
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && n) {
            arr.push(i);
            if (n !== 1 && i !== n / i) {
                arr.push(n / i);
            }
        }
    }
    
    return arr.sort((a, b) => a - b);
}