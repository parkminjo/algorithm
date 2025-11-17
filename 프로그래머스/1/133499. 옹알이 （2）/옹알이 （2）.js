function solution(babbling) {
    const validWords = ['aya', 'ye', 'woo', 'ma'];
    let count = 0;
    
    babbling.forEach(word => {
        let prevWord = '';
        let isValid = true;
        
        while (word.length > 0) {
            let isFound = false;
            
            for (let sound of validWords) {
                if (word.startsWith(sound) && prevWord !== sound) {
                    word = word.slice(sound.length);
                    prevWord = sound;
                    isFound = true;
                    break;
                }
            }
            
            if (!isFound) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) count++;
    })
    
    return count;
}