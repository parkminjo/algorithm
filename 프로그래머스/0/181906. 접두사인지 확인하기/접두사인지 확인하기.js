function solution(str, prefix) {
    const arr = new Array(str.length).fill(str);
    const newArr = arr.map((s, idx) => s.slice(0, idx + 1));
    return newArr.some(str => str === prefix) ? 1 : 0;
    
}