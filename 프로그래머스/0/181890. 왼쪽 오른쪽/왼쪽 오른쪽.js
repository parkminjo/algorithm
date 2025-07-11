function solution(strList) {
    for (let i = 0; i < strList.length; i++) {
        if (strList[i] === 'l') return strList.slice(0, i);
        if (strList[i] === 'r') return strList.slice(i + 1);
    }
    
    return [];
}