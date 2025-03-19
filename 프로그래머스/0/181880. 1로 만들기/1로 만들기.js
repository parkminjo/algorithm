function getCount(num) {
    let count = 0;
    
    while(num > 1) {
        num = num % 2 === 0 ? num / 2 : (num - 1) / 2
        count += 1;
    }
    return count
}

function solution(numList) {
    return numList.map(num => getCount(num)).reduce((a, c) => a + c);
}