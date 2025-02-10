function solution(str, suffix) {
    return str.slice(-suffix.length) === suffix ? 1 : 0;
}