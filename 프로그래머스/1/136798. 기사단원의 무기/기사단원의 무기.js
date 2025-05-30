function solution(number, limit, power) {
    let numArr = [];
    for (let i = 1; i <= number; i++) {
        numArr.push(i);
    }
    
    numArr = numArr.map(num => {
        let divisor = []
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisor.push(i);
                if (i !== num / i)
                    divisor.push(num / i);
            }
        }
    
        const attackPower = divisor.length
        return attackPower > limit ? power : attackPower;
    })
    
    return numArr.reduce((acc, cur) => acc += cur);
}