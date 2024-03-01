export const SET_TODO = 'SET_TODO';
export const SET_TODO_LIST = 'SET_TODO_LIST';
export const setTodo = (todo) => ({
  type: SET_TODO,
  payload: todo,
});

export const setTodoList = (todoList) => ({
  type: SET_TODO_LIST,
  payload: todoList,
});
