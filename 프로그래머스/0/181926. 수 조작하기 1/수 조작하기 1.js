function solution(n, control) {
    const WASD = {
        w: 1,
        s: -1,
        d: 10,
        a: -10
    }
    
    let answer = n;
    
    for (let i = 0; i < control.length; i++) {
        answer += WASD[control[i]]
    }
    
    return answer;
}