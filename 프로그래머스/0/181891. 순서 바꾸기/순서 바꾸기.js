function solution(numList, n) {
    numList.push(...numList.splice(0, n));
    return numList
}