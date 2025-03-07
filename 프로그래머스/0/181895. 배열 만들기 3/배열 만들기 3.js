function solution(arr, intervals) {
    const [inter1, inter2] = intervals;
    return [...arr.slice(inter1[0], inter1[1] + 1), ...arr.slice(inter2[0], inter2[1] + 1)]
}