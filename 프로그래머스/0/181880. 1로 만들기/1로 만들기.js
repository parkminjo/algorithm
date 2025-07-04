function solution(numList) {
    return numList.map(num => getCount(num)).reduce((acc, cur) => acc + cur);
}

function getCount(num) {
    let count = 0;
    
    for (let i = num; num > 1; i--) {
        num = num % 2 === 0 ? num / 2 : (num - 1) / 2
        count += 1;
    }
    return count;
}