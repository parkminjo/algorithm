function solution(n) {
    const result = Array.from(Array(n), () => Array(n).fill(0));
    
    for (let i = 0; i < result.length; i++) {
        result[i][i] = 1;
    }
    return result;
}