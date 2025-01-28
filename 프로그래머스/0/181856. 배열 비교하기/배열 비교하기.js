function solution(arr1, arr2) {
    let answer;
    if (arr1.length === arr2.length) {
       const sumArr1 = arr1.reduce((acc, cur) => acc+cur);
       const sumArr2 = arr2.reduce((acc, cur) => acc+cur);
       answer =sumArr1 > sumArr2 ? 1 : (sumArr1 === sumArr2 ? 0 : -1);
       return answer;
    }
    answer = arr1.length > arr2.length ? 1 : -1;
    return answer;
}