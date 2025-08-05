function solution(n) {
    const x = Math.ceil(Math.sqrt(n));
    return x**2 === n ? (x + 1)**2 : -1;
}