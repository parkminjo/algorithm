function solution(str) {
    let answer = 0;
    let temp = '';
    
    [...str].forEach(char => {
        if (char >= '0' && char <= '9') {
            
            temp += char;
        } else {
            answer += Number(temp);
            temp = '';
        }
    })
    
    if (temp) answer += Number(temp);
    
    return answer;
}