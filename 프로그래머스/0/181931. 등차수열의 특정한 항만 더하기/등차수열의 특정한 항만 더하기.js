function solution(a, d, included) {
    const answer = included.reduce((acc, c, i) => {
        return c ? acc + a + d * i : acc;
    }, 0);
    return answer;
}