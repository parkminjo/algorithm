function solution(price, money, count) {
    let total = 0;
    for (let i = 1; i <= count; i++) {
      total += price * i;
    }
    const result = total - money;
    return result > 0 ? result : 0;
}