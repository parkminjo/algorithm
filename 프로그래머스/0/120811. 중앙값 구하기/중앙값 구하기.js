function solution(arr) {
    const idx = Math.floor(arr.sort((a, b) => a - b).length / 2);
    
    return arr[idx];
}