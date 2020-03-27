import React from 'react';
import styled from 'styled-components';
import CharacterOptions from './CharacterOptions.jsx';

const FinderContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 210px;
  left: ${props => `${props.posX - 50}px`};
  top: ${props => `${props.posY - 40}px`};
`;

const Frame = styled.div`
  border: 8px solid black;
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

const CharacterBox = (props) => {
  return (
    <FinderContainer
      posX={props.posX}
      posY={props.posY}
    >
      <Frame />
      <CharacterOptions 
        handleCharacterSelect={props.handleCharacterSelect}
        characters={props.characters}
      />
    </FinderContainer>
  )
}

export default CharacterBox;