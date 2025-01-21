function solution(numbers) {
    var answer = 0;
    
    for(let i=0; i<10; i++){
        answer += i;
    }
    for(i in numbers){
        answer -= numbers[i];
    }
    return answer;
}