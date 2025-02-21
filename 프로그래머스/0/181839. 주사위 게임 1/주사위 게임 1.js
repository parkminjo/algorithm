const isEven = (num) => {
    return num % 2 === 0 ? true : false;
}

function solution(a, b) {
    if (isEven(a) && isEven(b)) {
        return Math.abs(a - b);
    } else if (isEven(a) || isEven(b)) {
        return Math.abs(2 * (a + b));
    } else {
        return Math.abs(a ** 2 + b ** 2);
    }
}

