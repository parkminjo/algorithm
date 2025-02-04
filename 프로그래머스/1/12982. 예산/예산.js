function solution(d, budget) {
    let count = 0;
    d.sort((a,b ) => a - b);
    d.reduce((acc, cur) => {
        if ((acc + cur) <= budget) {
            count += 1;
            return acc + cur;
        }
    }, 0)
    return count;
}