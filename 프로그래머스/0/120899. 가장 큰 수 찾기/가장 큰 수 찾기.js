function solution(arr) {
    const answerArr = [0, 0];
    
    for (let i = 0; i < arr.length; i++) {
        
        if (answerArr[0] <= arr[i]) {
            answerArr[0] = arr[i];
            answerArr[1] = i;
        }
    }
    return answerArr;
}