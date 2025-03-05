function solution(str, m, c) {
    const arrList = []
    let answer = ""
    for (let i = 0; i < str.length; i += m) {
        arrList.push(str.slice(i, i + m));
    }
    for (arr of arrList) {
        answer += arr[c - 1];
    }
    return answer;
}