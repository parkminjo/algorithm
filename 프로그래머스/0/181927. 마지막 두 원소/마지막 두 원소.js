function solution(numList) {
    const lastIdx = numList.length - 1;
    const lastNum = numList[lastIdx]
    const beforeNum = numList[lastIdx - 1]
    lastNum > beforeNum ? numList.push(lastNum - beforeNum) : numList.push(lastNum*2);
    return numList;
}