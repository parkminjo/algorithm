function solution(num_list) {
    let countEven = 0;
    let countOdd = 0;
    num_list.forEach(item => {
        item%2===0 ? countEven += 1 : countOdd += 1;
    })
    return [countEven, countOdd]
}