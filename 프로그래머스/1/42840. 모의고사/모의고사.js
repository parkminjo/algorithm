function solution(answers) {
    const answer = [];
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const student3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const student1Count = answers.filter((a,i)=> a === student1[i % student1.length]).length;
    const student2Count = answers.filter((a,i)=> a === student2[i % student2.length]).length;
    const student3Count = answers.filter((a,i)=> a === student3[i % student3.length]).length;
    const max = Math.max(student1Count, student2Count, student3Count);

    if (student1Count === max) {answer.push(1)};
    if (student2Count === max) {answer.push(2)};
    if (student3Count === max) {answer.push(3)};


    return answer;
}