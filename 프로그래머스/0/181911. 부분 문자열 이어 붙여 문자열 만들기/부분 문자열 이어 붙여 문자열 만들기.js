function solution(strings, parts) {
    const arr = [];
    
    for (let i = 0; i < strings.length; i++) {
        const [start, end] = parts[i]
        arr.push(strings[i].slice(start, end + 1));
    }
    return arr.join('');
}