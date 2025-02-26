function solution(strList, ex) {
    let answer = ""
    strList.forEach(item => {
        if (!item.includes(ex)) answer += item;
    })
    return answer;
}