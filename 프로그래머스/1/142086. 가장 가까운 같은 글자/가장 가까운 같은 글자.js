function solution(s) {
    const obj = {};
    
    return s.split("").map((char,idx) => {
        if (s.indexOf(char) === idx) return -1
        if (s.indexOf(char) !== idx) {
            const result = obj[char] ? idx - obj[char] : idx - s.indexOf(char)
            obj[char] = idx;
            return result;
        }
    });
}