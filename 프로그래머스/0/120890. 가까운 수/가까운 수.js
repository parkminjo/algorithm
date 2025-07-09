function solution(arr, n) {
    let answer = 100;
    let difference = 100;
    
    arr.forEach(num => {
        if (Math.abs(n - num) < difference) {
            difference = Math.abs(n - num)
            answer = num;
        }
        if (Math.abs(n - num) === difference) {
            num < answer ? answer = num : answer = answer;
        }
    })
    
    return answer;
}