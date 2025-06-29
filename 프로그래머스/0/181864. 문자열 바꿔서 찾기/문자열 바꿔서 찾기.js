function solution(str, pat) {
    return [...str].map(char => char === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}