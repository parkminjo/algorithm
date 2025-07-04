function solution(intStrList, k, s, l) {
    return intStrList.map(intStr => +intStr.slice(s, s + l)).filter(num => num > k)
}