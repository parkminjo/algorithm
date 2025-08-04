function solution(x, n) {
    const arr = [];
    const plusNum = x;
    let i = 0;
    
    while (i < n) {
        arr.push(x);
        x += plusNum;
        i++;
    }
    
    return arr;
}