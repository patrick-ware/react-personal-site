import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBar.css';

function NavBar(props) {
  return (
  <div>
      <Navbar className="NavBar">
          <Nav className="NavBar-Container">
            <Nav.Link style={{color: "white"}} className="NavBar-Link" href="#home">Home</Nav.Link>
            <Nav.Link className="NavBar-Link" href="#link">About Me</Nav.Link>
            <Nav.Link className="NavBar-Link" href="#link">Projects</Nav.Link>
            <Nav.Link className="NavBar-Link" href="#link">Contact</Nav.Link>
          </Nav>
      </Navbar>
  <div className="NavBar">
    <div className="NavBar-Container">
      <a className="NavBar-Link" href="#home">Home</a>
      <a className="NavBar-Link" href="#aboutme">About Me</a>
      <a className="NavBar-Link" href="#projects">Projects</a>
      <a className="NavBar-Link" href="#contact">Contact</a>
    </div>
  </div>
  </div>
  );
}

export default NavBar;
