function solution(str, m, c) {
    let answer = '';
    for (let i = 0; i < str.length; i += m) {
        answer += str.slice(i, i + m)[c - 1];
    }
    return answer;
}