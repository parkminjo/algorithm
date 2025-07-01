function solution(numList) {
    const even = numList.filter(num => num % 2 === 0).join('');
    const odd = numList.filter(num => num % 2 !== 0).join('');
    
    const answer = +even + +odd;
    return answer;
}