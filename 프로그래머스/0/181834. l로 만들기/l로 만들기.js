function solution(str) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t","u","v", "w", "x", "y", "z"];
    
    const answer = [...str].map(char => alphabet.indexOf(char) < 11 ? "l" : char).join("");
    return answer;
}