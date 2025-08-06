function solution(numbers) {
    const total = 45;
    return total - numbers.reduce((acc, cur) => acc + cur);
}