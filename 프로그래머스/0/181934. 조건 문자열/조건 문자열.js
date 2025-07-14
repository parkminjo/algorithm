function solution(ineq, eq, n, m) {
    let result;
    const op = ineq + eq;
    
    switch (op) {
        case '>=':
            result = n >= m;
            break;
        case '<=':
            result = n <= m;
            break;
        case '>!':
            result = n > m;
            break;
        case '<!':
            result = n < m;
            break;
    }
    
    return Number(result);
}