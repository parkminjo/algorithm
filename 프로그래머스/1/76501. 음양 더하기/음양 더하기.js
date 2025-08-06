function solution(absolutes, signs) {
    let sum = 0;
    
    signs.forEach((bool, idx) => {
        if (bool) sum += absolutes[idx];
        if (!bool) sum -= absolutes[idx];
    })
    
    return sum;
}