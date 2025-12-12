function solution(N, stages) {
    const failureLates = [];
    
    for (let i = 1; i <= N; i++) {
        let count = 0;
        let total = 0;
        
        for (let j = 0; j < stages.length; j++) {
            if (i === stages[j]) {
                count += 1;
            }
            
            if (i <= stages[j]) {
                total += 1;
            }
        }
        
        const failure = count / total;
        failureLates.push([i, failure]);
    }
    
    failureLates.sort((a, b) => {
        if (b[1] === a[1]) return a[0] - b[0];
        return b[1] - a[1];
    });
    
    return failureLates.map(item => item[0]);
}