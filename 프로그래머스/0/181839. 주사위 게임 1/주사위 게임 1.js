function solution(a, b) {
    if (isEven(a) && isEven(b)) return Math.abs(a - b);
    if (!isEven(a) && !isEven(b)) return a ** 2 + b ** 2;
    return 2 * (a + b);
}

function isEven(num) {
    return num % 2 === 0 ? true : false;
}