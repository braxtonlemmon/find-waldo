import React from 'react';
import GoldRushScene from 'images/gold_rush_scene.jpg';
import styled from 'styled-components';

const Img = styled.img`
  border: 10px double black;
  min-height: 100%;
  position: relative;
  cursor: crosshair;
`;

const Circle = styled.div`
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  width: 40px;
  height: 40px;
  left: ${props => `${props.x}px` };
  top: ${props => `${props.y}px` };
`;

const Scene = (props) => {
  const handleClick = () => {
    const parent = document.getElementById('waldoScene');
    const bounds = parent.getBoundingClientRect();
    const posX = event.clientX - bounds.left;
    const posY = event.clientY - bounds.top;
    console.log(posX, posY);
    drawCircle(posX, posY)
  }

  const drawCircle = (x, y) => {
    console.log(x, y);
    const box = document.querySelector('.scene-box');
    console.log(box);
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = `${x - 15}px`;
    circle.style.top = `${y - 15}px`;
    box.appendChild(circle);
  }

  return (
    <div className="scene-box">
      <Img 
        src={GoldRushScene} 
        alt="Where's Waldo Gold Rush Scene"
        onClick={props.handleClick}
        id="waldoScene"
      />
    </div>
  )
}

export default Scene;