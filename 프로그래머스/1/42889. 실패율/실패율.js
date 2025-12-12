function solution(N, stages) {
    const result = [];
    
    for (let i = 1; i <= N; i++) {
        const reachCount = stages.filter(stage => i === stage).length;
        const total = stages.filter(stage => i <= stage).length;
        const failure = reachCount / total;
        
        result.push([i, failure]);
    }
    
    result.sort((a, b) => {
        if (b[1] === a[1]) return a[0] - b[0];
        return b[1] - a[1];
    })
    
    return result.map(item => item[0]);
}