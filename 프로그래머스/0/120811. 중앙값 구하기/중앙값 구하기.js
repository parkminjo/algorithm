function solution(arr) {
    const idx = Math.ceil(arr.sort((a, b) => a - b).length / 2);
    
    return arr[idx - 1];
}