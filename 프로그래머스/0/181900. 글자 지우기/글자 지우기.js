function solution(str, indices) {
    return [...str].filter((_, idx) => !indices.includes(idx)).join('');
}