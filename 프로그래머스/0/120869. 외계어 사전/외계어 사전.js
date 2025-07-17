function solution(spell, dic) {
    return dic.some(str => spell.every(char => str.includes(char))) ? 1 : 2;
}