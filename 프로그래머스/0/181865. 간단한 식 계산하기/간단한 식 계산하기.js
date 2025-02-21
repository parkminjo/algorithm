function solution(binomial) {
    const op = ["+", "-", "*"];
    for (o of op) {
        if (binomial.includes(o)) {
            const arr = binomial.split(o)
            if (o === "+") {
                return +arr[0] + +arr[1];
            }
            if (o === "-") {
                return +arr[0] - +arr[1];
            }
            if (o === "*") {
                return +arr[0] * +arr[1];
            }
        }
    }
}