function solution(arr, k) {
    const set = new Set(arr);
    const newArr = [...set];
    const newArrLength = newArr.length;
    
    if (newArr.length > k) {
        for (let i = 0; i < newArrLength - k; i++) {
            newArr.pop();
        }
    } else {
        for (let i = 0; i < k - newArrLength; i++) {
            newArr.push(-1);
        }
    }
    
    return newArr;
}