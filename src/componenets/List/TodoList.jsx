import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../common/Button';
import ListItem from './ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { setTodo, setTodoList } from '../../store/Action';

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const todoList = useSelector((state) => state.todoList);
  const addButtonHandler = () => {
    const newTodoList = [...todoList, todo];
    dispatch(setTodoList(newTodoList));
    dispatch(setTodo(''));
    console.log(todoList.length);
  };
  return (
    <Container>
      <InputBox>
        <Input></Input>
        <Button buttonHandler={addButtonHandler} btnName={'입력'} />
      </InputBox>
      <ListBox>
        <ul>
          {todoList.map((todo, idx) => (
            <ListItem todo={todo} key={idx} id={idx}></ListItem>
          ))}
        </ul>
      </ListBox>
    </Container>
  );
};
const Container = styled.div`
  width: 700px;
  height: 1000px;
  background-color: #2e2e2e;
  border: 1px solid black;
`;
const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0 10px 0;
`;
const ListBox = styled.div`
  width: 100%;
`;
export default TodoList;
