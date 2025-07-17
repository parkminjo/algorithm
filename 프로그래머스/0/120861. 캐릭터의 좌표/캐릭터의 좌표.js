function solution(keyinput, board) {
    const result = [0, 0];
    
    for (let k of keyinput) {
        switch (k) {
            case 'right':
                if (result[0] < Math.floor(board[0] / 2)) result[0]++;
                break;
            case 'left':
                if (-result[0] < Math.floor(board[0] / 2)) result[0]--;
                break;
            case 'up':
                if (result[1] < Math.floor(board[1] / 2)) result[1]++;
                break;
            case 'down':
                if (-result[1] < Math.floor(board[1] / 2)) result[1]--;
                break;
        }
    }
    
    return result;
}