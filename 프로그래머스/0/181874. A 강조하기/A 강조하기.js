function solution(str) {
    return [...str].map(char => {
        return char === 'a' || char === 'A' ? 'A' : char.toLowerCase();
    }).join('');
}