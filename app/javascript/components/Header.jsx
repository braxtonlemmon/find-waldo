import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  height: 60px;
  width: 100%;
`;

const NavBar = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: yellow;
  z-index: 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  font-family: 'Rye', cursive;
  h1 {
    font-size: 2em;
  }

  .zoom-buttons {
    display: flex;
  }

  .zoom-button {
    padding: 5px;
    border: 2px solid black;
    margin: 0 15px;
    height: 2em;
    width: 2em;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2em;
    background: tan;
    cursor: pointer;
  }

  .timer-box {
    font-size: 2em;
    font-family: monospace;
    width: 4em;
    border-bottom: 3px dashed black;
    border-top: 3px dashed black;

    text-align: right;
    padding: 5px;
  }
`;

const Header = (props) => {
  const [time, setTime] = useState(Date.now());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
      console.log('hey');
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <NavBarContainer>
      <NavBar>
        <h1>Find Them!</h1>
        <div className="timer-box">{((Date.now() - props.startTime) / 1000).toFixed(1)}</div>
        <div className="top-scores-box">Top Scores</div>
        <div className="zoom-buttons">
          <div className="zoom-button">+</div>
          <div className="zoom-button">-</div>
        </div>
      </NavBar>
    </NavBarContainer>
  )
}

export default Header;