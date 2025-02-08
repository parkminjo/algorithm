function solution(arr, idx) {
    const answer = arr.findIndex((num, numIdx) => numIdx >= idx && num === 1);
    return answer;
}