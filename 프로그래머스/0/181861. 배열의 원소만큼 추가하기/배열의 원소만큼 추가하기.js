function solution(arr) {
    let x = [];
    arr.forEach(a => {
        for (let i = 0; i < a; i++) {
            x.push(a);
        }
    })
    return x;
}