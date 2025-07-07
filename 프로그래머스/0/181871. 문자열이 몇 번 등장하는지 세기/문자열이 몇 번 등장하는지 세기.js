function solution(str, pat) {
    let count = 0;
    
    [...str].forEach((char, idx) => {
        if (char === pat[0] && str.slice(idx, idx + pat.length) === pat) {
            count += 1;
        }
    })
    
    return count;
}