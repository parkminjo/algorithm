function solution(num, k) {
    const arr = [...String(num)];
    
    let answer = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) === k) {
            return i + 1;
        } else {
            continue;
        }
    }
    
    return answer;
}