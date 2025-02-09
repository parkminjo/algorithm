function solution(n, k) {
    let resultArr = [];
    for(let i = 1; i <= n; i++) {
        k * i <= n && resultArr.push(k*i);
    }
    return resultArr;
}