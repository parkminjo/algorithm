function solution(array) {
    const count = {};
    array.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    })
    
    let max = 0;
    let mode = -1;
    let isSame = false;
    
    for (let key in count) {
        const value = count[key];
        
        if (value > max) {
            max = value;
            mode = Number(key);
            isSame = false;
        } else if (value === max) {
            isSame = true;
        }
    }
    
    return isSame ? -1 : mode;
}