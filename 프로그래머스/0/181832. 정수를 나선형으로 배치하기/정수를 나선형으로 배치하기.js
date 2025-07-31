function solution(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    let x = 0;
    let y = 0;
    let dir = 0;
    
    for (let i = 1; i <= n * n; i++) {
        matrix[x][y] = i;
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || matrix[nx][ny] !== 0) {
            dir = (dir + 1) % 4;
        }
        x += dx[dir];
        y += dy[dir];
    }
    
    return matrix;
}