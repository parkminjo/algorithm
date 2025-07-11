function solution(str, n) {
    const arr = [];
    
    for (let i = 0; i < str.length; i += n) {
        arr.push(str.slice(i, i + n))    
    }
    
    return arr;
}