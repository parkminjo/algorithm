function solution(n) {
    const numArr = String(n).split('');
    let sum = 0;
    
    for (let i = 0; i < numArr.length; i++) {
        sum += Number(numArr[i])
    }
    
    return sum;
}