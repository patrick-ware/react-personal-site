import React from 'react';
import logo from './logo.svg';

import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import NavBar from './components/NavBar/NavBar.js'
import AboutMe from './components/AboutMe/AboutMe.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <HomePage />
      <NavBar />
      <AboutMe />
    </div>
  );
}

export default App;
