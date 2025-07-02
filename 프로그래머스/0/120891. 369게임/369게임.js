function solution(order) {
    let count = 0;
    order.toString().split('').forEach(item => {
        if ('369'.includes(item)) {
            count++;
        }
    })
    return count;
}