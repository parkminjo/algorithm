function solution(numList, n) {
    const arr = [];
    
    for (let i = 0; i < numList.length; i+= n) {
        const slicedArr = numList.slice(i, i + n);
        arr.push(slicedArr);
    }
    
    return arr;
}