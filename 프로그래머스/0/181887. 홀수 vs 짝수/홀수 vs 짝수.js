function solution(num_list) {
    let evenSum = 0;
    let oddSum = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        i % 2 === 1 ? evenSum += num_list[i] : oddSum += num_list[i];
    }
    return evenSum >= oddSum ? evenSum : oddSum;
}