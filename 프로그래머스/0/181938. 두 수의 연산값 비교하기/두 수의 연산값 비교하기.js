function solution(a, b) {
    const answer = 2*a*b >= `${a}`+`${b}` ? 2*a*b : Number(`${a}`+`${b}`);
    return answer;
}