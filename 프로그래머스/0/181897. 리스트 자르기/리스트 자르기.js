function solution(n, slicer, numList) {
    const [a, b, c] = slicer;
    
    if (n === 1) return numList.slice(0, b + 1);
    if (n === 2) return numList.slice(a);
    if (n === 3) return numList.slice(a, b + 1);
    return numList.slice(a, b + 1).filter((num, idx) => idx % c === 0);
}