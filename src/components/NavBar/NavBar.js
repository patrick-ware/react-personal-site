import React from 'react';
import './NavBar.css';

function NavBar(props) {
  return (
  <div className="NavBar">
    <div className="NavBar-Container">
      <a className="NavBar-Link" href="#home">Home</a>
      <a className="NavBar-Link" href="#aboutme">About Me</a>
      <a className="NavBar-Link" href="#projects">Projects</a>
      <a className="NavBar-Link" href="#contact">Contact</a>
    </div>
  </div>
  );
}

export default NavBar;
