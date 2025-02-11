function solution(str) {
    return new Array(str.length).fill(str).map((s, idx) => s.slice(-(idx + 1))).sort()
}