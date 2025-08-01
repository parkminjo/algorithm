function solution(babbling) {
    const pronunciations = ['aya', 'ye', 'woo', 'ma'];
    const validWords = [];
    
    function dfs(current, used) {
        if (current) validWords.push(current);
        if (used.length === pronunciations.length) return;

        for (let i = 0; i < pronunciations.length; i++) {
            if (!used.includes(i)) {
                dfs(current + pronunciations[i], [...used, i]);
            }
        }
    }
    dfs('', []);
    
    return babbling.filter(word => validWords.includes(word)).length;
}

