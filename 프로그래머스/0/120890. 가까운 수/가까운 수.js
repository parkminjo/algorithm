function solution(arr, n) {
    arr.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

    return arr[0];
}