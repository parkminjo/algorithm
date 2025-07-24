function solution(common) {
    const [n1, n2, n3] = common;
    const lastIdx = common.length - 1;
    
    if (n2 - n1 === n3 - n2) {
        return common[lastIdx] + (n2 - n1);
    }
    
    if (n2 / n1 === n3 / n2) {
        return common[lastIdx] * (n2 / n1);
    }
}