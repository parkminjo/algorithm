function solution(str) {
    return str.split('x').filter(char => char !== '').sort();
}