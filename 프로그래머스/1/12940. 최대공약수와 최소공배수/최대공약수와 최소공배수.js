function solution(n, m) {
    let divisor = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && m % i === 0) {
             divisor < i ? divisor = i : max;
        }
    }
    const multiples = divisor * n/divisor * m/divisor;
    return [divisor, multiples];
}