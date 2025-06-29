function solution(strList, ex) {
    return strList.filter(str => !str.includes(ex)).join('');
}