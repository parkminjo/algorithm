function solution(str, prefix) {
    return str.slice(0, prefix.length) === prefix ? 1 : 0;    
}