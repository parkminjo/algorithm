function solution(cipher, code) {
    const arr = [];
    for (let i = code - 1; i < cipher.length; i+= code) {
        arr.push(cipher[i]);
    }
    return arr.join('');
}