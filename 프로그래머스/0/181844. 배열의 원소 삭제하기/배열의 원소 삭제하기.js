function solution(arr, deleteList) {
    return arr.filter(num => !deleteList.includes(num));
}