function solution(a, b, n) {
    let cokeCount = 0;

    while (a <= n) {
        cokeCount += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + n % a;
    }
    return cokeCount;
}