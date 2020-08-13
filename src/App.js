import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import AboutMe from './components/AboutMe/AboutMe.js'
import Projects from './components/Projects/Projects.js'
import Contact from './components/Contact/Contact.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Scrollspy from 'react-scrollspy'

import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

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
      {/*Bootstrap Navbar */}
      <Navbar className="NavBar" expand="lg">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="NavBar-Container">
            <Nav.Link className="NavBar-Link" href="#home">Home</Nav.Link>
            <Nav.Link className="NavBar-Link" href="#about">About Me</Nav.Link>
            <Nav.Link className="NavBar-Link" href="#projects">Projects</Nav.Link>
            <Nav.Link className="NavBar-Link" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle as="div" aria-controls="responsive-navbar-nav">
           <div className="NavBar-Link-Menu" href= '#navbar-mobile'>
            <FontAwesomeIcon 
              className="Menu-Icon" 
              icon={['fas', 'bars']} 
            />
          </div>
        </Navbar.Toggle>
      </Navbar>
      {/*Regular Navbar */}
      <div className="NavBar">
        <div className="NavBar-Container">
          <Scrollspy 
            items={ ['home','about', 'projects', 'contact'] } 
            currentClassName="NavBar-Link-Active"
            componentTag={ 'a' }
          >
          <a className="NavBar-Link" href="#home">Home</a>
          <a className="NavBar-Link" href="#about">About Me</a>
          <a className="NavBar-Link" href="#projects">Projects</a>
          <a className="NavBar-Link" href="#contact">Contact</a>
          <div className="NavBar-Link-Menu" href= '#navbar-mobile' onClick={toggleMenu}>
            <FontAwesomeIcon 
              className="Menu-Icon" 
              icon={['fas', 'bars']} 
            />
          </div>
          </Scrollspy>
        </div>
            {
              showMenu 
                ? (
                <div className="navbar-mobile" id="navbar-mobile">
                    <a 
                      className="navbar-mobile-item" 
                      href="#home"
                      onClick={toggleMenu}
                    >Home</a>
                    <a 
                      className="navbar-mobile-item" 
                      href="#about"
                      onClick={toggleMenu}
                    >About Me</a>
                    <a 
                      className="navbar-mobile-item" 
                      href="#projects"
                      onClick={toggleMenu}
                    >Projects</a>
                    <a 
                      className="navbar-mobile-item" 
                      href="#contact"
                      onClick={toggleMenu}
                    >Contact</a>
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
