function solution(arr, queries) {
    queries.forEach(([i, j]) => {
        const num1 = arr[i]
        arr[i] = arr[j]
        arr[j] = num1
    })
    return arr;
}