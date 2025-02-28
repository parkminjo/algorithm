function solution(arr) {
    const size = arr.length;

    for(let i = 0; i < size; i++) {
        for(let j = i + 1; j < size; j++) {
            if(arr[i][j] !== arr[j][i]) return 0;
        }
    }

    return 1;
}