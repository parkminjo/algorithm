function solution(numList) {
    return numList.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}