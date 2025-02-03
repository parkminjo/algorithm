function solution(numbers, n) {
    let sum = 0;
    numbers.forEach(num => {
        if (sum > n) return sum;
        sum += num;
    })
    return sum;
}