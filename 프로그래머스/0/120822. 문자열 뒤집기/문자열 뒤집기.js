function solution(string) {
    const arr = [];
    for (let i = 0; i < string.length; i++) {
        arr.unshift(string[i]);
    }
    return arr.join("")
}