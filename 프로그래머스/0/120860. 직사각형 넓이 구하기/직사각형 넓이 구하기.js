function solution(dots) {
    const xArr = [];
    const yArr = [];
    
    dots.forEach(([x, y]) => {
        xArr.push(x);
        yArr.push(y);
    })
    
    const xMax = Math.max(...xArr);
    const xMin = Math.min(...xArr);
    
    const yMax = Math.max(...yArr);
    const yMin = Math.min(...yArr);
    
    return (xMax - xMin) * (yMax - yMin);
    
}