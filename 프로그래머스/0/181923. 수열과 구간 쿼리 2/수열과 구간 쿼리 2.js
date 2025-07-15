function solution(arr, queries) {
    const result = [];
    
    for (const [s, e, k] of queries) {
        const candidates = [];
        
        for (let i = s; i <= e; i++){
            if (arr[i] > k) candidates.push(arr[i]);
        }
        
        if (candidates.length === 0) {
            result.push(-1)
        } else {
            result.push(Math.min(...candidates));
        }
    }
    
    return result;
}