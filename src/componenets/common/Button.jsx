import styled from 'styled-components';

const Button = ({ buttonHandler, btnName }) => {
  const clickHandler = () => {
    buttonHandler();
  };
  return (
    <>
      <ButtonStyle onClick={clickHandler}>{btnName}</ButtonStyle>
    </>
  );
};
const ButtonStyle = styled.button`
  height: 50px;
  background-color: #2e2e2e;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  box-shadow: 1px 1px 0px 0;
  color: #c4c4c4;
  font-size: 25px;
  transition-duration: 0.3;
  &:active {
    top: 2px;
    position: relative;
    box-shadow: 0px 0px 0px 0px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export default Button;
