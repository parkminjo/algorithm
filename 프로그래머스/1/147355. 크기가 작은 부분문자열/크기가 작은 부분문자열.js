function solution(t, p) {
    let count = 0;
    let lastIndex = p.length;
    for (let i = 0; i < t.length; i++) {
        const target = t.slice(i, lastIndex);
        +target <= +p && target.length === p.length ? count += 1 : count += 0;
        lastIndex += 1;
    }
    return count;
}