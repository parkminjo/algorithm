function solution(money) {
    const price = 5500;
    const americano = Math.floor(money / price);
    const remainingMoney = money % price;
    
    return [americano, remainingMoney];
}