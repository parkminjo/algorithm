function solution(keyinput, board) {
    const direction = {
        up: [0, 1],
        down: [0, -1],
        right: [1, 0],
        left: [-1, 0],
    }
    
    const [width, height] = board;
    const xLimit = Math.floor(width / 2);
    const yLimit = Math.floor(height / 2);
    
    let x = 0;
    let y = 0;
    
    for (let key of keyinput) {
        const [a, b] = direction[key];
        const nextX = x + a;
        const nextY = y + b;
        
        if (Math.abs(nextX) <= xLimit && Math.abs(nextY) <= yLimit) {
            x = nextX;
            y = nextY;
        }
    }
    
    return [x, y];
}