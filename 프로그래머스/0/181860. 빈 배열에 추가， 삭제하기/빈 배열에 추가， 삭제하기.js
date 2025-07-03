function solution(arr, flag) {
    return arr.reduce((prev, cur, idx) => {
        return flag[idx] ? [...prev, ...new Array(cur * 2).fill(cur)] : prev.slice(0, -cur);
    }, [])
}