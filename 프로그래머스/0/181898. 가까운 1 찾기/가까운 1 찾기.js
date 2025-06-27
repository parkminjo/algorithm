function solution(arr, idx) {
    return arr.findIndex((item, i) => {
        return i >= idx && item === 1
    })
}