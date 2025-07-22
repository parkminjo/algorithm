function solution(numList, n) {
    return numList.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}