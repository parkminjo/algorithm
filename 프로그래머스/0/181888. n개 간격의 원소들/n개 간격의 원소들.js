function solution(num_list, n) {
    const answer = num_list.filter((_, idx) => idx % n === 0);
    return answer;
}