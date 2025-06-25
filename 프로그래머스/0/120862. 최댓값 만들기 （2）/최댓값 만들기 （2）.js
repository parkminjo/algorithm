function solution(numbers) {
    const lastIdx = numbers.length - 1;
    const [max1, max2] = numbers.sort((a, b) => b - a)
    
    return max1 * max2 >= numbers[lastIdx - 1] * numbers[lastIdx] ? max1 * max2 : numbers[lastIdx - 1] * numbers[lastIdx];
}