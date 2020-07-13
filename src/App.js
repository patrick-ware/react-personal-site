import React from 'react';
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
      <NavBar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
