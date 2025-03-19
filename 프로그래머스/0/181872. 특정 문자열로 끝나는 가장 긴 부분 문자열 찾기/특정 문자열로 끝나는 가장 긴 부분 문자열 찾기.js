function solution(str, pat) {
    const lastIdx = str.lastIndexOf(pat);
    return str.slice(0, lastIdx + pat.length);
}