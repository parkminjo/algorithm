function solution(arr) {
    let count = 0;
    
    arr.forEach(num => {
        if (num === 7) count += 1;
        
        if (num > 10) {
            String(num).split('').forEach(str => {
                if (Number(str) === 7) count += 1;
            })
        }
    })
    
    return count;
}