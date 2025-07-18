function solution(rank, attendance) {    
    const [first, second, third] = rank.filter((_, idx) => attendance[idx]).sort((a, b) => a - b);
    
    const a = rank.indexOf(first);
    const b = rank.indexOf(second);
    const c = rank.indexOf(third);    

    return 10000 * a + 100 * b + c;
}