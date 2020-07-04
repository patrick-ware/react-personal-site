import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage.js'


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
        testestest
      </div>
    </div>
  );
}

export default App;
