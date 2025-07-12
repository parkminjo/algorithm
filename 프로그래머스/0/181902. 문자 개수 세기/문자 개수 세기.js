function solution(str) {
    const result = Array(52).fill(0);

    for(let i = 0; i < str.length; i++){
        const alpha = str.charCodeAt(i);
        
        if (alpha >= 65 && alpha <= 90){
            result[alpha - 65]++;
        } else {
            result[alpha - 71]++;
        }
    }
    
    return result;
}