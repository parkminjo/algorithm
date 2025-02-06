function solution(n) {
    const arr = [];
    let rest = 0;
    
    for (let i = 0; 0 < n; i++) {
        rest = Math.floor(n % 3);
        n = Math.floor(n / 3);
        arr.push(rest);
    }
    
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i] * Math.pow(3, arr.length-1-i)
    }
    return answer;
}