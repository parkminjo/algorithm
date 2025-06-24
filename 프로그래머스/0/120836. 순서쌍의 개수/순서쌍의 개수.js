function solution(n) {
    let count = 1;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            count += 1;
        }
    }
    return count;
}