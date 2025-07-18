function solution(score) {
    const average = score.map(([en, math]) => (en + math) / 2);
    const sortedAverage = score.map(([en, math]) => (en + math) / 2).sort((a, b) => b- a);
    
    return average.map(score => sortedAverage.indexOf(score) + 1);
    
}