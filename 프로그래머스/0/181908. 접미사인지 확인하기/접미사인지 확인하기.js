function solution(str, isSuffix) {
    const arr = Array(str.length).fill(str).map((str, idx) => str.slice(idx));
    
    return arr.includes(isSuffix) ? 1 : 0;
}