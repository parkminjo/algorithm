function solution(strings, parts) {
    return parts.map(([start, end], idx) => {
        return strings[idx].slice(start, end + 1);
    }).join('');
}