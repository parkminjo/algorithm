function solution(startNum, endNum) {
    const arr = [];
    
    for (let i = startNum; i >= endNum; i--) {
        arr.push(i)
    }
    return arr;
}