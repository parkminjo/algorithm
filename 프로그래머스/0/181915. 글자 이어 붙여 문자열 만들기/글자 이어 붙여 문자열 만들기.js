function solution(str, indexList) {
    let result = "";
    for (idx of indexList) {
        result += str.slice(idx, idx+1);
    }
    return result;
}