function solution(n) {
    let baseArr = Array.from(Array(n), (v, i) => i + 1);
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        baseArr = baseArr.filter(num => num % i !== 0 || num <= i)
    }
    
    return n - baseArr.length;
}