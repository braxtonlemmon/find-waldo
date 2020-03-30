import React from 'react';
import styled from 'styled-components';
import SharedButton from './shared/Button.jsx';

const Container = styled.div`
  position: fixed;
  left: 15%;
  right: 15%;
  top: 15%;
  bottom: 15%;
  border: 3px solid black;
  background: green;
  font-family: 'Rye', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-transform: uppercase;
    font-size: 2em;
    text-align: center;
  }
`;

const Button = styled(SharedButton)`
  position: absolute;
  bottom: 30%;
`;

const FinishBox = (props) =>  {
  return (
    <Container>
      <p>You did it!</p>
      <Button
        onClick={props.handleCloseFinishBox}
      >
        x
      </Button>
    </Container>
  )
}

export default FinishBox;