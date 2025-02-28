function solution(arr, commands) {
    const answer = [];
    commands.forEach(([a, b, c]) => {
        const result = arr.slice(a - 1, b).sort((a, b) => a - b)[c - 1];
        answer.push(result);
    })
    return answer
}