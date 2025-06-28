function solution(numList) {
    const prevElement = numList[numList.length - 2];
    const lastElement = numList[numList.length - 1];
    
    lastElement > prevElement ? numList.push(lastElement - prevElement) : 
    numList.push(lastElement * 2);
    
    return numList
}