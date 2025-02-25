function solution(food) {
    const arr = [];
    food.forEach((f, idx) => {
        if (f > 1) {
            arr.push(idx.toString().repeat(Math.floor(f / 2)))
        }
    });
    return arr.join("") + "0" + arr.reverse().join("")
}