function solution(numList, n) {
    const arr = [];
    
    while (numList.length) {
        arr.push(numList.splice(0, n));
    }
    
    return arr;
}