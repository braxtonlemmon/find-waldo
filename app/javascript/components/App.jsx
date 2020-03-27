import React, { useState, useEffect } from "react"
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle.js';
import Scene from './Scene.jsx';
import CharacterBox from './CharacterBox.jsx';
import "typeface-rye";

const App = () => {
  const [isBoxActive, setIsBoxActive] = useState(false);
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch('/api/v1/characters/index')
    .then(response => response.json())
    .then(result => {
      setCharacters(result)
    });
  }, []);

  const handleClick = (e) => {
    const bounds = document.getElementById('waldoScene').getBoundingClientRect();
    setPosX(e.clientX - bounds.left);
    setPosY(e.clientY - bounds.top);
    setIsBoxActive(prevState => !prevState);
  };

  const handleCharacterSelect = (name) => {
    setIsBoxActive(prevState => !prevState);
    checkDatabase(name);  
  };

  const checkDatabase = (name) => {
    const csrfToken = document.querySelector("[name='csrf-token']").content;
    fetch('/api/v1/characters/find', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,  
      },
      body: JSON.stringify({x: posX, y: posY, name: name })
    }).then(response => response.json())
    .then(json => {
      if (json) console.log(`found ${name}`)
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
          handleCharacterSelect={handleCharacterSelect}
          characters={characters}
        />
      }

    </>
  );
}

export default App;
