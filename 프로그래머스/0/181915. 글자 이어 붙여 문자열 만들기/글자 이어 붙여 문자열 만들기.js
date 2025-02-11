function solution(str, indexList) {
    let result = "";
    for (idx of indexList) {
        result += str.charAt(idx);
    }
    return result;
}