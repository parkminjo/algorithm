const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const arr = [];
    for (let i = 0; i < input[0]; i++) {
        arr.push('*')
        console.log(arr.join(''))
    }
});