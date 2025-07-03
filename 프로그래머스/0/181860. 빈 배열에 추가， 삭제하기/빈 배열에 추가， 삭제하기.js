function solution(arr, flag) {
    const answer = [];
    
    flag.forEach((bool, idx) => {
        if (bool) {
            for (let i = 1; i <= arr[idx] * 2; i++) {
                answer.push(arr[idx]);
            }
        }
        if (!bool) {
            for (let i = 1; i <= arr[idx]; i++) {
                answer.pop();
            }
        }
    })
    
    return answer;
}