function solution(str) {
    return str.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}