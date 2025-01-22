function solution(a, b) {
    const x = a + "" + b;
    const y = b + "" + a;
    const answer = x >= y ? x : y;
    return Number(answer);
}