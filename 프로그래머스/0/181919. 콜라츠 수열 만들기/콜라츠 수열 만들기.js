function solution(n) {
    let arr = [n];
    for (let i = 0; 1 < n ;i++) {
        if (n % 2 === 0) {
            arr.push(n/2);
            n = n / 2;
        } else {
            arr.push(3 * n + 1);
            n = 3 * n + 1;
        }
    }
    return arr;
    
}