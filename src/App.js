import React from 'react';
import logo from './logo.svg';
import './App.css';
import BigSur from './static/BigSur.jpg'

function App() {
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
          <div className="Page-Home-Container">
            <div className="Page-Home-Button"> About Me </div>
            <div className="Page-Home-Button"> Projects </div>
            <div className="Page-Home-Button"> Contact </div>

        </div>
      </div>
      <div className="NavBar">
        <div className="NavBar-Container">
          <a className="NavBar-Link" href="#home">Home</a>
          <a className="NavBar-Link" href="#aboutme">About Me</a>
          <a className="NavBar-Link" href="#projects">Projects</a>
          <a className="NavBar-Link" href="#contact">Contact</a>
        </div>
      </div>
      <div className="Page-About">
        testestest
      </div>
    </div>
  );
}

export default App;
