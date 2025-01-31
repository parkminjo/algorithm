function solution(str, alp) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        str[i] === alp ? newStr += alp.toUpperCase() : newStr += str[i];
    }
    return newStr;
}