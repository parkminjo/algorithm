function solution(names) {
    let firstPerson = [];
    for (let i = 0; i < names.length; i+=5) {
        firstPerson.push(names[i]);
    }
    return firstPerson;
}