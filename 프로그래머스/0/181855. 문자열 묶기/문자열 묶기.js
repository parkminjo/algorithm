function solution(strArr) {
    const countByLength = {};
    
    for (const str of strArr) {
        const length = str.length;
        countByLength[length] = (countByLength[length] || 0) + 1;
    }
    
    return Math.max(...Object.values(countByLength));
}