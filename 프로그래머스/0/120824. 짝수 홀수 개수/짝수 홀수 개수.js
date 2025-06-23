function solution(numList) {
    const evenCount = numList.filter(num => num % 2 === 0).length;
    const oddCount = numList.filter(num => num % 2 !== 0).length;
    
    return [evenCount, oddCount];
}