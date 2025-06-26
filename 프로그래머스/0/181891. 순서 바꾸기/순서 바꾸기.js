function solution(numList, n) { 
    return [...numList.slice(n), ...numList.slice(0, n)]
}