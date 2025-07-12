function solution(str) {
    var answer = [];
    const al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const a = [];
    a.length = 52;
    a.fill(0);

    str.split("").map((n)=>{
        a[al.indexOf(n)]+=1
    })

    return a;
}