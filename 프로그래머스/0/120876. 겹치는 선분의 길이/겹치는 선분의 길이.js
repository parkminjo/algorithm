function solution(lines) {
    const map = new Map();
    
    for (const [start, end] of lines) {
        for (let i = start; i < end; i++) {
            map.set(i, (map.get(i) || 0) + 1);
        }
    }
        
    let overlapLength = 0;
    for (const [_, count] of map.entries()) {
        if (count >= 2) {
            overlapLength++;
        }
    }
    
    return overlapLength;
}

