import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  border: 2px solid black;
  position: absolute;
  left: ${props => `${props.left - 10}px`};
  top: ${props => `${props.top - 10}px`};
  height: ${props => `${props.bottom - props.top + 20}px`};
  width: ${props => `${props.right - props.left + 20}px`};
`;

const Frames = (props) => {
  const generateFrames = () => {
    let foundCharacters = [];
    console.log(props.found);
    props.found.forEach(found => {
      foundCharacters.push(
        <Frame
          key={found.name}
          left={found.left}
          right={found.right}
          top={found.top}
          bottom={found.bottom}
        />
      )
    })
    return foundCharacters;
  }
  
  return (
    <>
      {generateFrames()}
    </>
  )
}

export default Frames;