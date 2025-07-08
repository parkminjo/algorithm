function solution(myStr) {
    const answer = myStr.split('a').map(str => str.split('b')).flat().filter(str => str !== '').map(str => str.split('c')).flat().filter(str => str !== '')
    
    if (answer.length === 0) return ['EMPTY'];

    return answer;
}