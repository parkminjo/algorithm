function solution(str) {
    const arr = [];
    
    for (let i = 0; i < str.length; i++) {
        arr.push(str.slice(i));
    }
    return arr.sort();
}