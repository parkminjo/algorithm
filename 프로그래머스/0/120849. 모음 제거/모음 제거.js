function solution(str) {
    const arr = ['a', 'e', 'i', 'o', 'u'];
    
    return [...str].filter(char => !arr.includes(char)).join("");
}