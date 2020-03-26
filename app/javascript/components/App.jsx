import React, { useState } from "react"
import { Reset } from 'styled-reset';
import Scene from './Scene.jsx';

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
      <Scene 
        handleClick={handleClick}
      />
      {
        isBoxActive && 
        <p>
          {`x: ${posX} y: ${posY}`}
        </p>
      }
    </>
  );
}

export default App;
