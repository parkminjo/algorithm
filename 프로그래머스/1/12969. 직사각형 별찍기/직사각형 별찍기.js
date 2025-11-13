process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]);
    const b = Number(n[1]);
    
    const arr = [];
    
    for (let i = 0; i < a; i++) {
        arr.push('*');
    }
    
    for (let i = 0; i < b; i++) {
        console.log(arr.join(''));
    }
});