import React from 'react';
import logo from './logo.svg';
import './App.css';
import BigSur from './static/BigSur.jpg'

function App() {
  return (
    <div>
      <div className="Page-Home">
        <img 
          className="Page-Home-Img"
          src={BigSur} 
        />
        <div className="Page-Home-Title">
        Patrick Ware
        </div>
      </div>
      <div className="Page-About">
        testestest
      </div>
    </div>
  );
}

export default App;
