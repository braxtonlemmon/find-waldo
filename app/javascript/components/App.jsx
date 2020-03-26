import React, { useState } from "react"
import { Reset } from 'styled-reset';
import Scene from './Scene.jsx';

const App = () => {
  const [isBoxActive, setIsBoxActive] = useState(false);
  
  return (
    <>
      <Reset />
      <Scene />
    </>
  );
}

export default App;
