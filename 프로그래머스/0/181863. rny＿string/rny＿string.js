function solution(str) {
    const answer = str.includes("m") ? str.replaceAll("m","rn") : str;
    return answer;
}