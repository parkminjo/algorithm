function solution(rsp) {
    const 가위 = 2;
    const 바위 = 0;
    const 보 = 5;
    
    return [...rsp].map(item => {
        if (Number(item) === 2) {
            console.log(바위)
            return 바위;
        } else if (Number(item) === 0) {
            return 보;
        } else {
            return 가위;
        }
    }).join('')
}