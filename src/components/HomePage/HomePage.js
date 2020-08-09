import React from 'react';
import './HomePage.css';
import BigSur from '../../static/BigSur.jpg'

function HomePage(props) {
  return (
  <div>
    <div className="Page-Home" id="home">
        <img 
          className="Page-Home-Img"
          alt="Image of coastline and ocean in Big Sur, California"
          src={BigSur} 
        />
      <div className="Page-Home-Title-Container">
        <div className="Page-Home-Title">
        Patrick Ware
        </div>
        <div className="Page-Home-Subtitle">
        Oakland-based software engineer
        </div>
      </div>
        <div className="Page-Home-Container">
          <a className="Page-Home-Button" href="#about">
            About Me 
          </a>
          <a className="Page-Home-Button" href="#projects">
            Projects 
          </a>
          <a className="Page-Home-Button" href="#contact"> 
            Contact 
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
