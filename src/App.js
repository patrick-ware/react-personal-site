import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import Headshot from './static/Headshot_Color.JPG'


function App() {
  return (
    <div>
      <HomePage />
      <div className="NavBar">
        <div className="NavBar-Container">
          <a className="NavBar-Link" href="#home">Home</a>
          <a className="NavBar-Link" href="#aboutme">About Me</a>
          <a className="NavBar-Link" href="#projects">Projects</a>
          <a className="NavBar-Link" href="#contact">Contact</a>
        </div>
      </div>
      <div className="Page-About">
        <div className="Page-Title">
          About Me
        </div>
        <div className="Page-About-Container">
				  <img className="Headshot" src={Headshot}/>
          <div className="Page-About-Body"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
        </div>
      </div>
    </div>
  );
}

export default App;
