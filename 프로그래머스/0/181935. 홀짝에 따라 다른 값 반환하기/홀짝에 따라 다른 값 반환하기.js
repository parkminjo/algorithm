function solution(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % 2 === 0 && i % 2 === 0) {
            console.log(i);
            arr.push(i ** 2)
        } else if (n % 2 !== 0 && i % 2 !== 0) {
            arr.push(i);
        }
    }
    
    return arr.reduce((acc, cur) => acc + cur);
}