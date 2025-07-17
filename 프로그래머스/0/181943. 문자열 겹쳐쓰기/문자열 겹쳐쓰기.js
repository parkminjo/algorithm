function solution(str, overwriteStr, s) {
    const arr = [...str];
    arr.splice(s, overwriteStr.length, ...overwriteStr);
    return arr.join('');
}