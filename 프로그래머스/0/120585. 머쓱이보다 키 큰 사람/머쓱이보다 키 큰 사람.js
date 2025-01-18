function solution(array, height) {
    const x = array.filter(person => person > height).length;
    return x;
}