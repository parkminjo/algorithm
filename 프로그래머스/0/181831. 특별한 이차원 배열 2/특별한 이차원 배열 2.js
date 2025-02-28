function solution(arr) {
    const booleanArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {    
            const boolean = arr[i][j] === arr[j][i]
            booleanArr.push(boolean)
        }
    }
    return booleanArr.some(item => item === false) ? 0 : 1
}