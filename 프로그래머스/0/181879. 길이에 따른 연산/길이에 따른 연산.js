function solution(numList) {
    if (numList.length >= 11) {
        return numList.reduce((acc, cur) => acc + cur);
    } else {
        return numList.reduce((acc, cur) => acc * cur);
    }   
}