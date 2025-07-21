function solution(A, B) {
    const queue = [...A];
    
    for (let count = 0; count < A.length; count++) {
        if (queue.join('') === B) {
            return count;
        }
        const char = queue.pop();
        queue.unshift(char);
    }
    
    return -1;
}