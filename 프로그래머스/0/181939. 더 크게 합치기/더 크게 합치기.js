function solution(a, b) {
    return combineStr(a, b) >= combineStr(b, a) ? combineStr(a, b) : combineStr(b, a);
}

function combineStr (x, y) {
    return Number(String(x) + String(y));
}