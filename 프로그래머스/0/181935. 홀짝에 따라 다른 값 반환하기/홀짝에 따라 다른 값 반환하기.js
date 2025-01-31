function solution(n) {
    let arr = []
    if (n % 2 === 1) {
        for (let i = 1; i <= n; i += 2) {
        arr.push(i);
    }
        return arr.reduce((a,b) => a+b);
    } else {
        for (let i = 2; i <= n; i += 2) {
        arr.push(i**2);
    }
        return arr.reduce((a,b) => a+b);
    }
}