import styled from 'styled-components';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoList } from '../../store/Action';

const ListItem = ({ todo, id }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const deleteButtonHandler = () => {
    const newTodoList = todoList.filter((todo, index) => index !== id);
    dispatch(setTodoList(newTodoList));
  };
  return (
    <Container>
      <h3>{todo}</h3>
      <Button buttonHandler={deleteButtonHandler} btnName={'삭제'} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    color: #c4c4c4;
  }
`;
export default ListItem;
