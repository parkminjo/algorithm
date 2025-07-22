function solution(numList, n) {
    numList.sort((a, b) => {
        const distA = Math.abs(a - n);
        const distB = Math.abs(b - n);
        
        if (distA === distB) {
            return b - a;
        }
        
        return distA - distB;
    });
    
    return numList;
}