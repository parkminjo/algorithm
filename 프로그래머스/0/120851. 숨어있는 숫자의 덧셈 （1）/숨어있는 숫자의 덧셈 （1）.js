function solution(str) {
    return [...str].reduce((acc, cur) => Number(cur) ? acc + Number(cur) : acc, 0)
}