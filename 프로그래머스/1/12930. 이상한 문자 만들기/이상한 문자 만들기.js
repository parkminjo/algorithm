function solution(s) {
    const answer = s.split(" ").map((str, idx) => {
        return str.split("").map((s,idx) => {
            return idx % 2 === 0 ? s.toUpperCase() : s.toLowerCase();
        }).join("")
    }).join(" ");
    
    return answer;
}