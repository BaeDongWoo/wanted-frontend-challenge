import { SET_TODO, SET_TODO_LIST } from './Action';

const initialMainState = {
  todo: '',
  todoList: [],
};
const mainReducer = (state = initialMainState, action) => {
  switch (action.type) {
    case SET_TODO:
      return { ...state, todo: action.payload };
    case SET_TODO_LIST:
      return { ...state, todoList: action.payload };
    default:
      return state;
  }
};
export default mainReducer;
