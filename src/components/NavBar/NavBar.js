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
    <div className="NavBar">
      <div className="NavBar-Container">
        <a className="NavBar-Link" href="#">Home</a>
        <a className="NavBar-Link" href="#about">About Me</a>
        <a className="NavBar-Link" href="#projects">Projects</a>
        <a className="NavBar-Link" href="#contact">Contact</a>
      </div>
    </div> 
  </div>
  );
}

export default NavBar;
