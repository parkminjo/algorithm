function solution(emergency) {
    const originArr = [...emergency];
    const sortedArr = emergency.sort((a, b) => b - a);
    
    return originArr.map(num => sortedArr.indexOf(num) + 1);
}