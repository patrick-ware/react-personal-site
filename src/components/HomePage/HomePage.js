import React from 'react';
import './HomePage.css';
import BigSur from '../../static/BigSur.jpg'
import AboutMe from '../AboutMe/AboutMe.js'
import Projects from '../Projects/Projects.js'

function HomePage(props) {
  return (
  <div>
    <div className="Page-Home">
      <img 
        className="Page-Home-Img"
        src={BigSur} 
      />
      <div className="Page-Home-Title">
      Patrick Ware
      </div>
      <div className="Page-Home-Subtitle">
      Oakland-based software engineer
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
