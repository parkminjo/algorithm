function solution(n) {
    const arr = Array(n).fill(0);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [];
        
        for (let j = 0; j < arr.length; j++) {
            arr[i][j] = i === j ? 1 : 0
        }
    }
    return arr;
}