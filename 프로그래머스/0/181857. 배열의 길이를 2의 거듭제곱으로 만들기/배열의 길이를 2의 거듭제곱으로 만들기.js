function solution(arr) {
    let length = arr.length;
    let power = 1;
    
    while (power < length) {
        power *= 2
    }
    
    const zeroCount = power - length;
    for (let i = 0; i < zeroCount; i++) {
        arr.push(0);
    }
    
    return arr;
}