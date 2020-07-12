import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import NavBar from './components/NavBar/NavBar.js'
import AboutMe from './components/AboutMe/AboutMe.js'

function App() {
  return (
    <div>
      <HomePage />
      <NavBar />
      <AboutMe />
      <div className="Page-Projects">
        <div className="Page-Title">
          Projects
        </div>
        <div className="Page-Projects-Container">
        </div>
      </div>
    </div>
  );
}

export default App;
