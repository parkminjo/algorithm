function solution(arr) {
    const colLength = arr.length;
    const rowLength = arr[0].length;
    
    let result = [...arr];
    
    if (colLength > rowLength) {
        result.forEach(item => {
            for (let i = 1; i <= colLength - rowLength; i++) {
                item.push(0);
            }
        })
    }
    
    if (rowLength > colLength) {
        for (let i = 1; i <= rowLength - colLength; i++) {
            const newArr = Array.from({ length: rowLength }, () => 0)
            result.push(newArr)
        }
    }
    
    return result;
}