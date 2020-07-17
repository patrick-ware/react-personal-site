import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import NavBar from './components/NavBar/NavBar.js'
import AboutMe from './components/AboutMe/AboutMe.js'
import Projects from './components/Projects/Projects.js'

function App() {
  return (
    <div>
      <HomePage />
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
