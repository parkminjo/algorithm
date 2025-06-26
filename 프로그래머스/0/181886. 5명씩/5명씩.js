function solution(names) {
    let answer = [];
    let limitCount = 5;
    
    for (let i = 0; i < names.length; i+= limitCount) {
        answer.push(names[i]);
    }
    return answer;
}