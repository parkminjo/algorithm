function solution(quiz) {
    const answer = [];
    
    return quiz.map(str => {
        const [calc, result] = str.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [x, y] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +x + (+y * sign) === +result ? 'O' : 'X'
    });
}