function solution(strArr) {
    const answer = strArr.filter(str => {
        return !str.includes("ad");
    })
    return answer;
}