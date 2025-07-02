function solution(n) {
    let i = 6;
    
    while (true) {
        if ((i % 6 === 0) && (i % n === 0)) {
            break
        }
        i += 6;
    }
    return i / 6;
}