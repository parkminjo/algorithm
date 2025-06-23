function solution(n) {
    const sliceOfPizza = 7;
    
    if (n <= 7) return 1;
    
    return n % 7 === 0 ? parseInt(n / 7) : parseInt(n / 7) + 1
}