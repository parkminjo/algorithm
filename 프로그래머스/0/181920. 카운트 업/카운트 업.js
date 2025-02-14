function solution(start, end) {
    return Array(end - start + 1).fill(start).map((num, idx) => num + idx)
}