function solution(arr) {
    const stk = [];
    
    arr.forEach((x,i)=>{
        if( x !== stk[stk.length - 1]){
            stk.push(x);
        }else{
            stk.pop();
        }
    })

    return stk.length === 0 ? [-1] : stk;
}