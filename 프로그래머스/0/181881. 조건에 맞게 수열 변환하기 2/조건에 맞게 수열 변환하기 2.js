function solution(arr) {
    let count = 0;
    let prevArr = arr;
    
    while (true) {
        const newArr = prevArr.map(num => {
            if (num >= 50 && num % 2 === 0) return num / 2;
            if (num < 50 && num % 2 !== 0) return num * 2 + 1;
            return num;
        })
        
        const isAllSame = prevArr.every((n, idx) => n === newArr[idx]);
        if (isAllSame) break;
        
        count += 1;
        prevArr = newArr;
    }
    
    return count;
}