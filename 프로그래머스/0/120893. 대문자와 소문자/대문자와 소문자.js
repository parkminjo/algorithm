function solution(str) {
    return [...str].map(char => {
        if (isUpperCase(char)) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
};