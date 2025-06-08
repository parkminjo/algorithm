function solution(str, s, e) {
    const first = str.slice(0, s);
    const middle = [...str.slice(s, e + 1)].reverse().join('')
    const after = str.slice(e + 1);
    
    return first + middle + after
}