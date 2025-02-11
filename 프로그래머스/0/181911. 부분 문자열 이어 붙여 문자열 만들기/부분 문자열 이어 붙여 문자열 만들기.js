function solution(strs, parts) {
    let result = "";
    strs.forEach((str, idx) => {
        result += str.slice(parts[idx][0], parts[idx][1]+1);
    })
    return result;
}