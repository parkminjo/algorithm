function solution(todoList, finished) {
    return todoList.filter((todo, idx) => !finished[idx])
}