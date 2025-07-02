function solution(age) {
    return age.toString().split('').map(num => 'abcdefghij'[num]).join('');
}