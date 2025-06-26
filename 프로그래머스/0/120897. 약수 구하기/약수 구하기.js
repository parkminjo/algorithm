function solution(n) {
    let s = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n%i === 0) {
            s.add(i);
            s.add(n/i);
        }
    }
    return [...s].sort((a,b)=>a-b);
}