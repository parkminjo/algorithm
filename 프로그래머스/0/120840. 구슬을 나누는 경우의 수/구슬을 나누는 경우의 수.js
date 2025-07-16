function solution(balls, share) {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(n) {
    let result = 1n;
    
    for (let i = 1n; i <= BigInt(n); i++) {
        result = result * i;
    }
    return result;
}