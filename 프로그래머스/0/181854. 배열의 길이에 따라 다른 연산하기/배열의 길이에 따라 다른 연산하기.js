function solution(arr, n) {
    return arr.length % 2 === 0 ? 
        arr.map((num, idx) => idx % 2 !== 0 ? num + n : num) :
        arr.map((num, idx) => idx % 2 === 0 ? num + n : num)
}