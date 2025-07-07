function solution(str, pat) {
    let count = 0;
    for (let i = 0; i <= str.length - pat.length; i++) {
        if (str.slice(i, i + pat.length) === pat) {
            count++;
        }
    }

    return count;
}