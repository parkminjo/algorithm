function solution(str) {
    return [...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}