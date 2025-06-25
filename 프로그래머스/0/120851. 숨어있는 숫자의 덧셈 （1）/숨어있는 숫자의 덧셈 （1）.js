function solution(str) {
    return [...str].filter(item => !isNaN(Number(item))).reduce((acc, cur) => acc + Number(cur), 0);
}