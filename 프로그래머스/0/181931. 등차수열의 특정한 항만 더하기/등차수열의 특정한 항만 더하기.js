function solution(a, d, included) {
    const arr = Array(included.length).fill(a).map((num, idx) => num + idx * d);
    const answer = included.reduce((a, c, i) => {
        return c ? a + arr[i] : a;
    }, 0);
    return answer;
}