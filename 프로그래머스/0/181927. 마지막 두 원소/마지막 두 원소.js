function solution(numList) {
    const [a, b] = [...numList].reverse();
    return [...numList, a > b ? a - b : a * 2];
}