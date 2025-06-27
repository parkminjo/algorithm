function solution(str, isPrefix) {
    return str.slice(0, isPrefix.length) === isPrefix ? 1 : 0
}