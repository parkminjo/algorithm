function solution(num_list) {
    const reverseArr = [];
    
    for (let i = 1; i <= num_list.length; i++) {
        reverseArr.push(num_list[num_list.length - i]);
    }
    return reverseArr;
}