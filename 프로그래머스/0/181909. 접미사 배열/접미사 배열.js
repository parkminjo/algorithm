function solution(str) {
    return Array.from(str).map((_, idx) => str.substring(idx)).sort();
}