function solution(arr, queries) {
    for (const query of queries) {
        const [s, e, k] = query;
        arr = arr.map((num, i) => s <= i && i <= e && i % k === 0 ? num + 1 : num)
    }
    
    return arr;
}