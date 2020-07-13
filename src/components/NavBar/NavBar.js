import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './NavBar.css';

function NavBar(props) {
  return (
  <div>
{/* <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  <Navbar className="NavBar" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
*/}
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
