function solution(todo_list, finished) {
    let yetList = [];
    for(let i = 0; i < todo_list.length; i++) {
        if (finished[i] === false) yetList.push(todo_list[i]);
    }
    return yetList;
}