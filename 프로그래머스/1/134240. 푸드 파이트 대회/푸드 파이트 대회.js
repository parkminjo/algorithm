function solution(food) {
    let left = "";
    food.forEach((f, idx) => {
        if (f > 1) {
            const half = Math.floor(f / 2)
            left += idx.toString().repeat(half);
        }
    });
    return left + "0" + left.split("").reverse().join("")
}