import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
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
  //set navbar menu visibility
  const[showMenu, setShowMenu]=useState(false)
  return (
    <div>
      <HomePage/>
      <div className="NavBar">
        <div className="NavBar-Container">
          <a className="NavBar-Link" href="#">Home</a>
          <a className="NavBar-Link" href="#about">About Me</a>
          <a className="NavBar-Link" href="#projects">Projects</a>
          <a className="NavBar-Link" href="#contact">Contact</a>
          <a className="NavBar-Link" href="#">
            <FontAwesomeIcon 
              className="Icon" 
              icon={['fas', 'bars']} 
            />
          </a>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
