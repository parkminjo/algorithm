function solution(n, k) {
    const arr = [];
    
    for (let i = k; i <= n; i += k) {
        if (i % k === 0) {
            arr.push(i);
        }
    }
    return arr;
}