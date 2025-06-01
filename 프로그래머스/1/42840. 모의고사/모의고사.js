function solution(answers) {
    let student1 = [1, 2, 3, 4, 5];
    let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const getAnsweredCount = (student) => {
        
        return answers.map((num, i) => num === student[i % student.length] ? 1 : 0).reduce((acc, cur) => acc + cur);
    }
    
    student1 = getAnsweredCount(student1)
    student2 = getAnsweredCount(student2)
    student3 = getAnsweredCount(student3)
    const scores = [student1, student2, student3];
    const maxScore = Math.max(...scores);
    
    const result = [];
    scores.forEach((score, idx) => {
        if (score === maxScore) result.push(idx + 1);
    })
    return result;
} 