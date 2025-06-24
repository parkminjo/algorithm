function solution(price) {
    if (500000 <= price) {
        return Math.floor(price - price * 0.2);
    } else if (300000 <= price) {
        return Math.floor(price - price * 0.1);
    } else if (100000 <= price) {
        return Math.floor(price - price * 0.05);
    } else {
        return price;
    }
}