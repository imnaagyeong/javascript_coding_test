function solution(todo_list, finished) {
    return finished.map((v, i) => v === false ? todo_list[i] : null).filter((v) => v !== null);
}