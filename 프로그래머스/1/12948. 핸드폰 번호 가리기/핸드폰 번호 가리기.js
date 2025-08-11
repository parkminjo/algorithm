function solution(phoneNumber) {
    const num = phoneNumber.slice(-4);
    const str = Array(phoneNumber.length - 4).fill('*').join('');
    return str + num;
}