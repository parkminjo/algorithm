function solution(str) {
    const length = str.length;
    const center = str.length / 2;
    
    if (length % 2 === 0) {
        return str.slice(center - 1, center + 1);
    } else {
        return str.slice(Math.floor(center), Math.floor(center) + 1);
    }
}

