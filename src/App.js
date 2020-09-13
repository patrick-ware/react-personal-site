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
import smoothscroll from 'smoothscroll-polyfill';

library.add(fab, fas)

function App() {
  smoothscroll.polyfill();

//  const [windowDimension, setWindowDimension] = useState(null);

//  useEffect(() => {
//    setWindowDimension(window.innerWidth);
//  }, []);

//  useEffect(() => {
//    function handleResize() {
//      setWindowDimension(window.innerWidth);
//    }

//    window.addEventListener("resize", handleResize);
//    return () => window.removeEventListener("resize", handleResize);
//  }, []);

//  const isMobile = windowDimension <= 640;

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
      <HomePage
        collapseFunction={menuDelayHomepage}
      />
      {/*Hasier nav bar
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-0">
          <a className="navbar-brand" href="index.html">Hasier Pastor Larrieta</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsed-content">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="collapsed-content">
          <ul className="navbar-nav ml-auto">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
          </ul>
        </div>
      </nav>*/}
      {/*default nav bar 
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>*/}
    {/*Pato Nav */}

      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
