function solution(lines) {
    const line = new Array(200).fill(0);

    lines.forEach(([start, end]) => {
        for(; start < end; start++) {
            line[start + 100]++;
        }
    });

    return line.reduce((a, c) =>  c >= 2 ? a + 1 : a, 0)
}