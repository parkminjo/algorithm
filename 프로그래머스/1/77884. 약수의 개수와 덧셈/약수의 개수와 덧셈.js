function solution(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i ++) {
        let arr = [];
        let index = 1;
        while (index <= right) {
            if (i % index === 0) arr.push(index);
            index ++;
        }
        arr.length % 2 === 0 ? sum += i : sum -= i;
    }
    return sum;
}