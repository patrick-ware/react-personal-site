import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import AboutMe from './components/AboutMe/AboutMe.js'
import Projects from './components/Projects/Projects.js'
import Contact from './components/Contact/Contact.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas)

function App() {

  // Set navbar menu visibility
  const[showMenu, setShowMenu]=useState(false)

  function toggleMenu(){
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <HomePage/>
      <div className="NavBar">
        <div className="NavBar-Container">
          <a className="NavBar-Link" href="#">Home</a>
          <a className="NavBar-Link" href="#about">About Me</a>
          <a className="NavBar-Link" href="#projects">Projects</a>
          <a className="NavBar-Link" href="#contact">Contact</a>
          <div className="NavBar-Link-Menu" onClick={toggleMenu}>
            <FontAwesomeIcon 
              className="Menu-Icon" 
              icon={['fas', 'bars']} 
            />
          </div>
        </div>
            {
              showMenu 
                ? (
                <div className="navbar-mobile">
                    <a className="navbar-mobile-item" href="#">Home</a>
                    <a className="navbar-mobile-item" href="#about">About Me</a>
                    <a className="navbar-mobile-item" href="#projects">Projects</a>
                    <a className="navbar-mobile-item" href="#contact">Contact</a>
                </div>
                )
                : (null
                )}
      </div>
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
