function solution(babbling) {
    const babblableWords = ["aya", "ye", "woo", "ma"];
    
    return babbling.reduce((count, babbl, idx) => {
        for (let i = 0; i < babblableWords.length; i++) {
            if (babbl.includes(babblableWords[i].repeat(2))) return count;
        }
        
        for (let i = 0; i < babblableWords.length; i++) {
            babbl = babbl.split(babblableWords[i]).join(' ').trim();
        }
        
        if (babbl) return count;
        
        return count += 1;
    }, 0);
}