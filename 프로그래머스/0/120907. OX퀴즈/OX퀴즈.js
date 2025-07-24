function solution(quiz) {
    const answer = quiz.map(str => {
        const [n1, op, n2, eq, result] = str.split(" ");
        let sum = 0;
        
        switch (op) {
            case '+':
                sum = +n1 + +n2;
                break;
            case '-':
                sum = +n1 - +n2;
                break;
        }
        
        return sum === +result ? "O" : "X";
    });
    
    return answer;
}