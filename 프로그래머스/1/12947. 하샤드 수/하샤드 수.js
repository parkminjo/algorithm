function solution(x) {    
    const sum = x.toString().split('').reduce((acc, cur) => acc + +cur, 0);
    
    const answer = x % sum === 0 ? true : false;
    return answer;
}