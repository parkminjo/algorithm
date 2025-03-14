function solution(arr, flag) {
    const answer = [];
    
    arr.forEach((num, i) => {
        if (flag[i]) {
            for (let i = 0; i < num * 2; i++) {
                answer.push(num);
            }
        } else {
            for (let i = 0; i < num; i++) {
                answer.pop();
            }
        }
    })
    
    return answer;
}