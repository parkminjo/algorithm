function solution(i, j, k) {
    let count = 0;
    const target = String(k);
    
    for (let num = i; num <=j; num++) {
        const numStr = String(num);
        
        for (let char of numStr) {
            if (char === target) count++;
        }
    }
    
    return count;
}