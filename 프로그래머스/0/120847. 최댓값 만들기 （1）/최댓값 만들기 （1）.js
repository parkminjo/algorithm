function solution(numbers) {
    const [max1, max2] = numbers.sort((a, b) => b - a);
    return max1 * max2;
}