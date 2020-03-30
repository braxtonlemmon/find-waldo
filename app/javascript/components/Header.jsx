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

  .timer-box {
    font-size: 2em;
    font-family: monospace;
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
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <NavBarContainer>
      <NavBar>
        <h1>Find Them!</h1>
        <div className="timer-box">{((Date.now() - props.startTime) / 1000).toFixed(1)}</div>
        <div className="top-scores-box">Top Scores</div>
      </NavBar>
    </NavBarContainer>
  )
}

export default Header;