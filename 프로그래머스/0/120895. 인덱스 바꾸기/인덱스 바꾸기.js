function solution(str, num1, num2) {
    const num1Char = str[num1];
    const num2Char = str[num2];
    
    const arr = [...str];
    arr[num1] = num2Char;
    arr[num2] = num1Char;
    
    return arr.join('');
}