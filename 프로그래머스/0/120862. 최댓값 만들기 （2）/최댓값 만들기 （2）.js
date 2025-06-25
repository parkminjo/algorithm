function solution(numbers) {
    const [max1, max2] = numbers.sort((a, b) => b - a);
    const [max3, max4] = numbers.sort((a, b) => a - b);
    
    return max1 * max2 >= max3 * max4 ? max1 * max2 : max3 * max4;
}