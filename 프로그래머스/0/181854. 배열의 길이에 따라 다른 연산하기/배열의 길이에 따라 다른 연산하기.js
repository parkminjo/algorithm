function solution(arr, n) {
    let newArr = [];
    if (arr.length % 2 === 1) {
        newArr = arr.map((item, idx) => {
            return idx % 2 === 0 ? item + n : item;
        })
    } else {
        newArr = arr.map((item, idx) => {
            return idx % 2 === 1 ? item + n : item;
        })
    }
    return newArr;
}