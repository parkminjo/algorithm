function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    let gcd = getGCD(denom, numer);

    return [numer / gcd, denom / gcd];
}

function getGCD(a, b){
    return (a % b) ? getGCD(b, a % b) : b;
}