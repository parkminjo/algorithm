function solution(arr) {
    return arr.every((numList, i) => numList.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
}