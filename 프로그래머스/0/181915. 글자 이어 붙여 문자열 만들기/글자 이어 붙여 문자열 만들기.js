function solution(str, idxList) {
    return idxList.map((idx) => str[idx]).join('');
}