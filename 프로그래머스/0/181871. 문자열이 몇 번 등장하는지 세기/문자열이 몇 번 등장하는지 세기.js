function solution(str, pat) {
    let count = 0;
    let idx = str.indexOf(pat);
    
    if (!str.includes(pat)) {
        return 0;
    }
    
    while (idx !== -1) {
        count += 1;
        idx = str.indexOf(pat, idx + 1)
    }
    
    return count;
}