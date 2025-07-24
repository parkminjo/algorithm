function solution(board) {
    const n = board.length;
    const danger = Array.from({ length: n }, () => Array(n).fill(false));
    
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                danger[i][j] = true;
                for (let k = 0; k < 8; k++) {
                    const ni = i + dx[k];
                    const nj = j + dy[k];
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                        danger[ni][nj] = true;
                    }
                }
            }
        }
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!danger[i][j]) count++;
        }
    }

    return count;
}