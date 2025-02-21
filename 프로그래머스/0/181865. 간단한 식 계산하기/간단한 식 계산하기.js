function solution(binomial) {
    const arr = binomial.split(" ");
    const num1 = + arr[0]
    const num2 = + arr[2]
    
    switch(arr[1]) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
    }
}