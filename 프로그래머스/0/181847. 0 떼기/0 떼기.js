function solution(str) {
    const arr = str.split("");
    while (arr[0] === "0") {
        arr.splice(0, 1);
    }
    return arr.join("");
}