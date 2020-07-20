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

function componentScrollAboutMe(){
  window.scrollTo({
    top: 1000,
    left: 0,
    behavior: 'smooth'
  });
}

function componentScrollProjects(){
  window.scrollTo({
    top: 1950,
    left: 0,
    behavior: 'smooth'
  });
}

function App() {
  return (
    <div>
      <HomePage
        aboutPage={componentScrollAboutMe}
        projectPage={componentScrollProjects} 
      />
      <StickyContainer>
        <Sticky> 
          {({ style }) => (
            <div style={style}>
              <NavBar
                aboutPage={componentScrollAboutMe}
                projectPage={componentScrollProjects} 
              />
            </div>
          )}
        </Sticky>
      <AboutMe />
      <Projects />
      <div className="Page-Contact">
        <div className="Page-Contact-Title">
          Contact Me
        </div>
<textarea>
Test contact form
</textarea>
      </div>
      </StickyContainer>
    </div>
  );
}

export default App;
