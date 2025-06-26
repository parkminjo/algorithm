function solution(numbers, n) {
    return numbers.reduce((acc, cur) => {
        if (acc <= n) {
            console.log(acc);
            return acc += cur;
        } else {
            return acc;
        }
    })
}