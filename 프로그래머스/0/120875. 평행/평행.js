function solution(dots) {
    const [x1, y1] = dots[0];
    const [x2, y2] = dots[1];
    const [x3, y3] = dots[2];
    const [x4, y4] = dots[3];
    
    if (getSlope(x1, y1, x2, y2) === getSlope(x3, y3, x4, y4)) {
        return 1;
    }
    if (getSlope(x1, y1, x3, y3) === getSlope(x2, y2, x4, y4)) {
        return 1;
    }
    if (getSlope(x1, y1, x4, y4) === getSlope(x2, y2, x3, y3)) {
        return 1;
    }

    return 0;
    
}

function getSlope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1);
}