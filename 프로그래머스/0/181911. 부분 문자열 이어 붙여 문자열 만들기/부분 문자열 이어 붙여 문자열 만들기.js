function solution(strs, parts) {
    return parts.map(([num1, num2], idx) => {
        return strs[idx].slice(num1, num2+1);
    }).join("");
}