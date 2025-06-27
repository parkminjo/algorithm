function solution(n) {
    const arr = [n];
    
    while (n > 1) {
        if (n % 2 === 0) {
            arr.push(n / 2);
            n = n / 2;
        } else {
            arr.push(3 * n + 1);
            n = 3 * n + 1
        }
    }
    
    return arr;
}