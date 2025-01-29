function solution(myStr, pat) {
    let newStr = ""
    for(let i=0; i<myStr.length; i++) {
        myStr[i] === "A" ? newStr += "B" : newStr += "A";
    }
    return newStr.includes(pat) ? 1 : 0;
}