function solution(t, p) {
    let count = 0;
    for (let i = 0; i <= t.length-p.length; i++) {
        const target = t.slice(i, p.length + i);
        if (+target <= +p) count++;
    }
    return count;
}