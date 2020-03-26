import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ul {
    width: 100%;
  }
  
  li {
    text-align: center;
    border: 1px solid black;
    background: yellow;
    font-size: 18px;
    font-family: 'Rye', cursive;
    padding: 2px;
    cursor: pointer;
    &:hover {
      background: lightseagreen;
    }
    }
  }
`;

const CharacterOptions = () => {
  return (
    <Container>
      <ul>
        <li>Waldo</li>
        <li>Wenda</li>
        <li>Odlaw</li>
        <li>Woof</li>
        <li>Wizard</li>
      </ul>
    </Container>
  )
}

export default CharacterOptions;