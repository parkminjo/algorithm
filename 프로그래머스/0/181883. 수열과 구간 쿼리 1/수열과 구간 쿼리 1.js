function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        const [s, e] = queries[i];
        
        arr = arr.map((item, idx) => {
            if (s <= idx && e >= idx) {
                return item + 1;
            } else {
                return item;
            }
        })
    }
    return arr;
}