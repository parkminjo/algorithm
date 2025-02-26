function solution(arr, deleteList) {
    return arr.filter(item => !deleteList.includes(item))
}