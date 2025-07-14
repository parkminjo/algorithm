function solution(str, queries) {
    const arr = [...str];
    
    queries.forEach(([s, e]) => {
        const slicedArr = arr.slice(s, e + 1).reverse();
        arr.splice(s, e - s + 1, ...slicedArr);
    })
    
    return arr.join('');
}