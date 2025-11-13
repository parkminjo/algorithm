function solution(s) {
    if (s.includes('e')) return false;
    if (isNaN(Number(s))) return false;
    
    const arrLength = s.length;
    if (arrLength === 4) {
        return true;
    } else if (arrLength === 6) {
        return true;
    } else {
        return false;
    }
}