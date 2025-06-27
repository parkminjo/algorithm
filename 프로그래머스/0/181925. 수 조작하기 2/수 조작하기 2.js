function solution(numLog) {
    const w = 1;
    const s = -1;
    const d = 10;
    const a = -10;
    
    const arr = [];
    
    for (let i = 0; i < numLog.length; i++) {
        switch (numLog[i + 1] - numLog[i]) {
            case w:
                arr.push('w');
                break;
            case s:
                arr.push('s');
                break;
            case d:
                arr.push('d');
                break;
            case a:
                arr.push('a');
                break;
        }
    }
    return arr.join('');
}