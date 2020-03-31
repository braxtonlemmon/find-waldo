import React, { useState, useEffect } from "react"
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle.js';
import Header from './Header.jsx';
import Scene from './Scene.jsx';
import CharacterBox from './CharacterBox.jsx';
import Frames from './Frames.jsx';
import MessageBox from './MessageBox.jsx';
import FinishBox from './FinishBox.jsx';
import TopScores from './TopScores.jsx';
import Intro from './Intro.jsx';
import Characters from './Characters.jsx';
import "typeface-rye";

const App = () => {
  const [isBoxActive, setIsBoxActive] = useState(false);
  const [isMessageActive, setIsMessageActive] = useState(false)
  const [isFound, setIsFound] = useState(false);
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [isTopScoresActive, setIsTopScoresActive] = useState(false);
  
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);
  
  const [characters, setCharacters] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [areAllFound, setAreAllFound] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [topScores, setTopScores] = useState(null);

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    if (boxes.length === 5) {
      setAreAllFound(true);
    }
  }, [boxes]);

  const getCharacters = () => {
    fetch('/api/v1/characters/index')
    .then(response => response.json())
    .then(result => {
      setCharacters(result)
    });
  }

  const handleClick = (e) => {
    if (!areAllFound) {
      const bounds = document.getElementById('waldoScene').getBoundingClientRect();
      setPosX(e.clientX - bounds.left);
      setPosY(e.clientY - bounds.top);
      setIsBoxActive(prevState => !prevState);
    }
  };

  const handleCharacterSelect = (name) => {
    checkDatabase(name);  
    setIsBoxActive(prevState => !prevState);
    setIsMessageActive(true);
  };

  const handleClickStart = () => {
    setStartTime(Date.now());
    setIsIntroActive(false);
  }

  const handleCloseMessage = () => {
    setIsMessageActive(false);
  }

  const handleCloseFinishBox = () => {
    getCharacters();
    setBoxes([]);
    setAreAllFound(false);
    setIsFound(false);
    setIsMessageActive(false);
    setIsBoxActive(false);
    setStartTime(Date.now());
  }

  const handleCloseTopScores = () => {
    setIsTopScoresActive(false);
  }

  const handleClickTopScores = () => {
    setIsTopScoresActive(true);
    getTopScores();
  }

  const getTopScores = () => {
    fetch('/api/v1/players/index')
    .then(response => response.json())
    .then(response => {
      setTopScores(response);
    })
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
        setIsFound(true);
      } else {
        setIsFound(false);
      }
    });
  }

  const theme = {
    main: 'rgba(190, 1, 14, 1)'
  }

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header
        startTime={startTime}
        handleClickTopScores={handleClickTopScores}
        isIntroActive={isIntroActive}
      />
      { !isIntroActive && <Scene handleClick={handleClick} /> } 
      <Characters />
      { isIntroActive && <Intro handleClickStart={handleClickStart} /> }
      { isBoxActive && 
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
          isFound={isFound}
        />
      }
      <Frames boxes={boxes} />
      {
        areAllFound &&
        <FinishBox 
          handleCloseFinishBox={handleCloseFinishBox}
          startTime={startTime}
        />
      }
      {
        isTopScoresActive &&
        <TopScores 
          topScores={topScores}
          handleCloseTopScores={handleCloseTopScores}
        />
      }
    </ThemeProvider>
  );
}

export default App;
