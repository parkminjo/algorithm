function solution(picture, k) {
    const result = [];
    
    for (let row of picture) {
        let stretchedRow = '';
        for (let char of row) {
            stretchedRow += char.repeat(k);
        }
        
        for (let i = 0; i < k; i++) {
            result.push(stretchedRow)
        }
    }
    
    return result;
}