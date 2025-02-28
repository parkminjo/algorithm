function solution(array, commands) {
    return commands.map(([num1, num2, num3]) => {
        return array.slice(num1 - 1, num2).sort((a, b) => a - b).slice(num3 - 1, num3)[0];
    });
}