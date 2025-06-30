function solution(numList) {
    let oddSum = 0;
    let evenSum = 0;

    numList.forEach((num, idx) => idx % 2 === 0 ? evenSum += num : oddSum += num);

    return Math.max(oddSum, evenSum);
}