import React, { useState } from "react"
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle.js';
import Scene from './Scene.jsx';
import CharacterBox from './CharacterBox.jsx';
import "typeface-rye";

const App = () => {
  const [isBoxActive, setIsBoxActive] = useState(false);
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);

  const handleClick = (e) => {
    const bounds = document.getElementById('waldoScene').getBoundingClientRect();
    setPosX(e.clientX - bounds.left);
    setPosY(e.clientY - bounds.top);
    setIsBoxActive(prev => {
      return !prev;
    });
  }

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Scene 
        handleClick={handleClick}
      />
      {
        isBoxActive && 
        <CharacterBox
          posX={posX}
          posY={posY}
        />
      }
    </>
  );
}

export default App;
