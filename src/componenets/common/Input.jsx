import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setTodo } from '../../store/Action';

const Input = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  return (
    <>
      <InputStyle
        type="text"
        value={todo}
        onChange={(e) => dispatch(setTodo(e.target.value))}
        placeholder="할일을 입력해 주세요"
      ></InputStyle>
    </>
  );
};
const InputStyle = styled.input`
  width: 80%;
  height: 50px;
  background-color: #2e2e2e;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  color: #c4c4c4;
  font-size: 25px;
`;
export default Input;
