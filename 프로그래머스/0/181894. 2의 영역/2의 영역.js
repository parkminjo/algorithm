function solution(arr) {
    const firstIdx = arr.indexOf(2);
    const lastIdx = arr.lastIndexOf(2);
    
    if (firstIdx === -1) return [-1];
    if (firstIdx === lastIdx) return [2];
    
    return arr.slice(firstIdx, lastIdx + 1);
}