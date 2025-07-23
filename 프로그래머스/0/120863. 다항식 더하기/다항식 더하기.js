function solution(polynomial) {
    const arr = polynomial.split(' + ');
    
    let xSum = 0;
    let constSum = 0;
    
    arr.forEach(item => {
        if (item.includes('x')) {
            item === 'x' ? xSum += 1 : xSum += Number(item.slice(0, -1));
        } else {
            constSum += Number(item);
        }
    })
    
    let result = '';
    
    if (xSum > 0) {
        result += xSum === 1 ? 'x' : `${xSum}x`;
    }
    if (constSum > 0) {
        result += result.length ? ` + ${constSum}` : `${constSum}`
    }
    
    return result;
}