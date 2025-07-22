function solution(l, r) {
    const arr = generateNumbers(r);
    const result = arr.filter(num => num >= l);
    
    if (result.length === 0) return [-1];
    
    return result;
}

function generateNumbers(limit) {
    const result = [];
    const queue = ['5'];
    
    while (queue.length) {
        const current = queue.shift();
        const num = Number(current);
        
        if (num > limit) continue;
        
        result.push(num);
        queue.push(current + '0');
        queue.push(current + '5');
    }
    
    return result;
}