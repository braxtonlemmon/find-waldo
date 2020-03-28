import React, { useState, useEffect } from "react"
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle.js';
import Scene from './Scene.jsx';
import CharacterBox from './CharacterBox.jsx';
import Frames from './Frames.jsx';
import MessageBox from './MessageBox.jsx';
import "typeface-rye";

const App = () => {
  const [isBoxActive, setIsBoxActive] = useState(false);
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [isMessageActive, setIsMessageActive] = useState(false)

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
    checkDatabase(name);  
    setIsBoxActive(prevState => !prevState);
    setIsMessageActive(true);
  };

  const handleCloseMessage = () => {
    setIsMessageActive(false);
  }

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
      if (json) { 
        const coords = [json.left, json.right, json.top, json.bottom];
        setBoxes(prevBoxes => ([...prevBoxes, ...[coords]]));
        setCharacters(characters.filter(character => { return character.name !== name }));
      }
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
      {
        isMessageActive && !isBoxActive &&
        <MessageBox
          posX={posX}
          posY={posY}
          handleCloseMessage={handleCloseMessage}
        />
      }
      <Frames 
        boxes={boxes}
      />
    </>
  );
}

export default App;
