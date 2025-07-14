const operations = {
    '>=' : (n, m) => n >= m,
    '<=' : (n, m) => n <= m,
    '>!' : (n, m) => n > m,
    '<!' : (n, m) => n < m,
}

function solution(ineq, eq, n, m) {
    const operate = operations[ineq + eq];
    const result = Number(operate(n, m));
    return result;
}