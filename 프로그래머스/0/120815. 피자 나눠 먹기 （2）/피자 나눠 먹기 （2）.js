function solution(n) {
    let i = 1;
    
    while (true) {
        if ((i % 6 === 0) && (i % n === 0)) {
            break
        }
        i++;
    }
    return i / 6;
}