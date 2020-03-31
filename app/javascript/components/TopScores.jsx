import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  top: 20%;
  left: 20%;
  right: 20%;
  bottom: 20%;
  border: 5px solid black;
  background: green;
  position: fixed;
`;

const CloseButton = styled.button`
  border: none;
  border-radius: 50%;
  height: 2em;
  width: 2em;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  outline: none;
`;

const TopScores = (props) => {
  const generateScores = () => {
    let list = [];
    if (props.topScores) {
      props.topScores.forEach(scoreObj => {
      list.push(<li>{`name: ${scoreObj.name} time: ${scoreObj.length}`}</li>)
      })
    }
    return list;
  }
  
  return (
    <Container>
      <h1>{generateScores()}</h1>
      <CloseButton
        onClick={props.handleCloseTopScores}
      >
        x
      </CloseButton>
    </Container>
  )
}

export default TopScores;