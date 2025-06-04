function solution(k, m, score) {
    const sortedScore = score.sort((a, b) => b - a).filter(score => 1 <= score && score <= k)
    const newArr = [];
    
    for (let i = 0; i < score.length; i += m) {
        const slicedApple = sortedScore.slice(i, i + m);
        if (slicedApple.length === m) {
            newArr.push(Math.min(...slicedApple) * m);
        } else {
            newArr.push(0);
        }
    }
    
    return newArr.reduce((acc, cur) => acc + cur);
}