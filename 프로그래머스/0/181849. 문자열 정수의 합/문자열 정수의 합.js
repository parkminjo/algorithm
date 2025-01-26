function solution(num_str) {
    const answer = num_str.split("").reduce((acc, cur) => +acc + +cur);
    return answer;
}