import React, { useState, useEffect } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import NavBar from './components/NavBar/NavBar.js'
import AboutMe from './components/AboutMe/AboutMe.js'
import Projects from './components/Projects/Projects.js'
import Contact from './components/Contact/Contact.js'

function App() {
  return (
    <div>
      <HomePage/>
      <StickyContainer>
        <Sticky> 
          {({ style }) => (
            <div style={style}>
              <NavBar/>
            </div>
          )}
        </Sticky>
      <AboutMe />
      <Projects />
      <Contact />
  </StickyContainer>
</div>
  );
}

export default App;
