function solution(num, total) {
    const min = Math.ceil(total / num - Math.floor(num / 2));
    const max = Math.floor(total / num + Math.floor(num / 2));

    return new Array(num).fill(0).map((_, i)=> i + min);
}