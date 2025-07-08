function solution(s) {
    const obj = {};
    
    for (const char of s.split('')) {
        obj[char] = (obj[char] || 0) + 1;
    }
    
    return Object.entries(obj).filter(([key, value]) => value === 1).map(([key, value]) => key).sort().join('') ?? '';
}