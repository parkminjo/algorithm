function solution(numList, n) {
    const arr = [];
    for (let i = 0; i < numList.length; i += n) {
        arr.push(numList[i]);
    }
    return arr;
}