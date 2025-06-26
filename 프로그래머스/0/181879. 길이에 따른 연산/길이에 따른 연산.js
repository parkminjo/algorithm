function solution(numList) {
    return numList.reduce((acc, cur) => numList.length > 10 ? acc + cur : acc * cur);
}