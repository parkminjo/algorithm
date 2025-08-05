function solution(s) {
    let pCount = 0;
    let yCount = 0;
    
    s.toLowerCase().split('').forEach((char) => {
        if (char === 'p') pCount += 1;
        if (char === 'y') yCount += 1;
    })
    
    return pCount === yCount ? true : false;
    
    if (!pCount && !yCount) return false;
}