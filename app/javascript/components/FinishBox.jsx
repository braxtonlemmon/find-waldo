import React, { useState } from 'react';
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
  flex-direction: column;
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
  const [endTime] = useState(Date.now());
  const [name, setName] = useState('');
  
  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  }

  const handleSubmit = () => {
    const length = ((endTime - props.startTime) / 1000).toFixed(2);
    const csrfToken = document.querySelector("[name='csrf-token']").content;
    fetch('/api/v1/players/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify({
        name: name, 
        length: length
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.")
    })
    .then(() => props.handleCloseFinishBox())
    .catch(error => console.log(error.message))
  }

  return (
    <Container>
      <input
        type='text'
        value={name}
        onChange={handleChange}
      />
      <p>You did it in {(endTime - props.startTime) / 1000} seconds</p>
      <Button
        onClick={props.handleCloseFinishBox}
      >
        x
      </Button>
      <button onClick={handleSubmit}>Submit</button>
    </Container>
  )
}

export default FinishBox;