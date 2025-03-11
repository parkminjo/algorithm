function solution(str, indices) {
    return str.split("").filter((s, i) => !indices.includes(i)).join("");
}