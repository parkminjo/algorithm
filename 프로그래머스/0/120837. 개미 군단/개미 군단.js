function solution(hp) {
    const warlord = 5;
    const soldier = 3;
    const ergate = 1;
    
    let sum = Math.floor(hp / warlord);
    if (hp % warlord !== 0) {
        sum += Math.floor(hp % warlord / soldier);
        
        if (hp % warlord % soldier !== 0) {
            sum += hp % warlord % soldier
        }
    }
    
    return sum;
}