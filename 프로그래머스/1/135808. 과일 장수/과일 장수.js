function solution(k, m, score) {
    score.sort((a, b) => b - a);
    const newArr = [];
    
    for (let i = 0; i < score.length; i += m) {
        const slicedApple = score.slice(i, i + m);
        if (slicedApple.length === m) {
            newArr.push(Math.min(...slicedApple) * m);
        } else {
            newArr.push(0);
        }
    }
    
    return newArr.reduce((acc, cur) => acc + cur);
}