function solution(s) {
    const arr = [];
    
    for (const char of s) {
        if (s.indexOf(char) === s.lastIndexOf(char)) arr.push(char);
    }
    
    return arr.sort().join('');
}