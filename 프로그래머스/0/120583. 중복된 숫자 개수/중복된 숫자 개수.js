function solution(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) count += 1;
    }
    return count;
}