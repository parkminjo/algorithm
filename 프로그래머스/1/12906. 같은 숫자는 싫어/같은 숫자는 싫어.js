function solution(arr){
    let answer = [];
    arr.forEach((item, idx) => {
        if (item === arr[idx + 1]) {
            return;
        } else {
            answer.push(item);
        }
    })
    return answer;
}