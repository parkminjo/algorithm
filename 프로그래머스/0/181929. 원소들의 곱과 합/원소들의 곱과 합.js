function solution(numList) {
    const mutiply = numList.reduce((acc, cur) => acc * cur);
    const sum = numList.reduce((acc, cur) => acc + cur);
    
    return mutiply < sum ** 2 ? 1 : 0;
}