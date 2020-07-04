import React from 'react';
import './HomePage.css';
import BigSur from '../../static/BigSur.jpg'

function HomePage(props) {
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
        <div className="Page-Home-Container">
          <div className="Page-Home-Button"> About Me </div>
          <div className="Page-Home-Button"> Projects </div>
          <div className="Page-Home-Button"> Contact </div>
      </div>
    </div>
  </div>
  );
}

export default HomePage;
