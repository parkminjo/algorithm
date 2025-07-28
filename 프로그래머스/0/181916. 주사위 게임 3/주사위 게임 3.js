function solution(a, b, c, d) {
    const counts = {};
    const arr = [a, b, c, d];
    arr.forEach(num => {
       counts[num] = (counts[num] || 0) + 1; 
    })
    
    const entries = Object.entries(counts).map(([num, count]) => [Number(num), count])
    entries.sort((a, b) => b[1] - a[1]);
    
    if (entries.length === 1) {
        return 1111 * entries[0][0];
    }
    
    if (entries.length === 2) {
        const [p, count1] = entries[0];
        const [q, count2] = entries[1];
        
        if (count1 === 3) {
            return (10 * p + q)**2;
        } else {
            return (p + q) * Math.abs(p - q);
        }
    }
    
    if (entries.length === 3) {
        const [_, q, r] = entries;
        return q[0] * r[0];
    }
    
    if (entries.length === 4) {
        return Math.min(a, b, c, d);
    }
}