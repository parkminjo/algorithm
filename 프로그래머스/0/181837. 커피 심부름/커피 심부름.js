function solution(order) {
    const aPrice = 4500;
    const cPrice = 5000;
    
    return order.reduce((acc, cur) => {
        if (cur === 'anything') return acc += aPrice;
        return cur.includes('americano') ? acc + aPrice : acc + cPrice;
    }, 0)
}

