function solution(k, score) {
    let fameList = [];
    const answer = [];
    for (let i = 0; i < score.length; i++) {
        if (fameList.length === k) {
            if (fameList.some(fame => fame < score[i])) {
                const min = Math.min(...fameList);
                fameList.splice(fameList.indexOf(min), 1);
                fameList.push(score[i]);
                fameList.sort((a, b) => b - a);
                answer.push(fameList[k - 1]);
            } else {
                answer.push(fameList[k - 1]);
            }
        } else {
            fameList.push(score[i]);
            fameList.sort((a, b) => b - a);
            answer.push(fameList[fameList.length - 1]);
        };
    }
    return answer;
}