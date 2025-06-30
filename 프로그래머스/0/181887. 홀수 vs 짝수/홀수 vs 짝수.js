function solution(numList) {
    const oddSum = numList.reduce((acc, cur, idx) => idx % 2 === 0 ? acc += cur : acc,0)
    const evenSum = numList.reduce((acc, cur, idx) => idx % 2 !== 0 ? acc += cur : acc,0)
    
    return oddSum >= evenSum ? oddSum : evenSum;
}