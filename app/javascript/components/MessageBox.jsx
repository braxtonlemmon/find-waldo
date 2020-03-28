import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 2px solid black;
  padding: 10px;
  background: ${props => props.isFound ? 'yellow' : '#ff4f5c'};
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${props => `${props.posX - 25}px`};
  top: ${props => `${props.posY + 70}px`};
`;

const Message = styled.p`
  justify-self: center;
  font-family: 'Rye', cursive;
  margin: 0 10px;
`;

const Button = styled.button`
  justify-self: flex-end;
  cursor: pointer;
  background: black;
  color: white;
  border: none;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`;

const MessageBox = (props) => {
  return (
    <Container
      posX={props.posX}
      posY={props.posY}
      isFound={props.isFound}
    >
      <Message>
        {props.isFound ? 'Good job!' : 'Try again!'}
      </Message>
      <Button
        onClick={props.handleCloseMessage}
      >
        X
      </Button>
    </Container>
  )
}

export default MessageBox;