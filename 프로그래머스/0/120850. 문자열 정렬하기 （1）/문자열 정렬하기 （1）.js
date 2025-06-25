function solution(str) {
    return [...str].filter(item => !isNaN(Number(item))).map(item => Number(item)).sort((a, b) => a - b);
}