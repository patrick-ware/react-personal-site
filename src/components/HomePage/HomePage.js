import React from 'react';
import './HomePage.css';
import BigSur from '../../static/BigSur.jpg'

function HomePage(props) {
  return (
  <div>
    <div className="Page-Home" id="home">
        <img 
          className="Page-Home-Img"
          alt="Coastline and ocean in Big Sur, California"
          src={BigSur} 
        />
      <div className="Page-Home-Container">
        <div className="Page-Home-Title">
        Patrick Ware
        </div>
        <div className="Page-Home-Subtitle">
        Oakland-based software engineer
        </div>
        <div className="Page-Home-Button-Container">
          <a 
            className="Page-Home-Button" 
            href="#about"
            onClick={props.collapseFunction}
          >
            About Me 
          </a>
          <a 
            className="Page-Home-Button" 
            href="#projects"
            onClick={props.collapseFunction}
          >
            Projects 
          </a>
          <a 
            className="Page-Home-Button" 
            href="#contact"
            onClick={props.collapseFunction}
          > 
            Contact 
          </a>
        </div>
        </div>            
      </div>
    </div>
  );
}

export default HomePage;
