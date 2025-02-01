function solution(strArr) {
    const answer = strArr.map((str, idx) => idx %  2 === 0 ? str.toLowerCase() : str.toUpperCase())
    return answer;
}