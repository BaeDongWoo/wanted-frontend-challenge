import styled from 'styled-components';
import './App.css';
import TodoList from './componenets/List/TodoList';

function App() {
  return (
    <Container>
      <TodoList></TodoList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export default App;
