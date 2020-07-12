import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './HomePage.css';
import BigSur from '../../static/BigSur.jpg'
import AboutMe from '../AboutMe/AboutMe.js'

function componentScroll(){
  window.scrollTo({
    top: 1000,
    left: 0,
    behavior: 'smooth'
  });
}

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
          <div className="Page-Home-Button" onClick={componentScroll}> About Me </div>
          <div className="Page-Home-Button"> Projects </div>
          <div className="Page-Home-Button"> Contact </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
