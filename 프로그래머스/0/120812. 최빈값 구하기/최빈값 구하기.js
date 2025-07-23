function solution(array) {
    let map = new Map();
    for (let n of array) {
        map.set(n, (map.get(n) || 0)+1)
    };
    
    const arr = [...map].sort((a,b) => b[1] - a[1]);
    const [first, second] = arr
    
    return arr.length === 1 || first[1] > second[1] ? first[0] : -1;
}