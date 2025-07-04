function solution(str, s, e) {
    const arr = [...str];
    const reversedStr = arr.slice(s, e + 1).reverse();
    
    arr.splice(s, e - s + 1, ...reversedStr);
    return arr.join('')
}