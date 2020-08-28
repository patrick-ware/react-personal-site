import React, {useState} from 'react';
import HomePage from './components/HomePage/HomePage.js'
import AboutMe from './components/AboutMe/AboutMe.js'
import Projects from './components/Projects/Projects.js'
import Contact from './components/Contact/Contact.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import Scrollspy from 'react-scrollspy'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fab, fas)

function App() {

  // Set navbar menu visibility
  const[showMenu, setShowMenu]=useState(false)

  function toggleMenu(){
    console.log("toggling menu...")
    setShowMenu(!showMenu);
  }

  function menuDelay(){
    console.log("menuDelay invoked...")
    setTimeout(toggleMenu, 600);
  }

  function menuDelayHomepage(){
    console.log("menuDelayHomepage invoked...")
    setTimeout(collapseMenu, 600);
  }

  function collapseMenu(){
    setShowMenu(false)
  }

  return (
    <div>
      <HomePage
        collapseFunction={menuDelayHomepage}
      />
      <Navbar
        expanded={showMenu}
        onSelect={menuDelay}
        sticky="top" 
        className="NavBar" 
        expand="md" 
        variant=""
      >
        <Navbar.Brand as="a" href="#home">
          <a className="NavBar-brand" href="#home">PATRICK WARE</a>
        </Navbar.Brand>
        <Navbar.Toggle as="div" aria-controls="responsive-navbar-nav" onClick={toggleMenu}>
           <div className="NavBar-Link-Menu" href= '#navbar-mobile'>
            <FontAwesomeIcon 
              className="Menu-Icon" 
              icon={['fas', 'bars']} 
            />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="NavBar-Container">
            <Nav.Link className="Bootstrap-NavBar-Link" href="#home">Home</Nav.Link>
            <Nav.Link className="Bootstrap-NavBar-Link" href="#about">About Me</Nav.Link>
            <Nav.Link className="Bootstrap-NavBar-Link" href="#projects">Projects</Nav.Link>
            <Nav.Link className="Bootstrap-NavBar-Link" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
