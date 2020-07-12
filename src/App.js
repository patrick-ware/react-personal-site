import React from 'react';
import logo from './logo.svg';
import ProjectPlaceholder from './static/project-placeholder.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import NavBar from './components/NavBar/NavBar.js'
import AboutMe from './components/AboutMe/AboutMe.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas)

function App() {
  return (
    <div>
      <HomePage />
      <NavBar />
      <AboutMe />
      <div className="Page-Projects">
        <div className="Page-Projects-Title">
          Projects
        </div>
        <div className="Page-Projects-Container">
          <div className="Page-Projects-Title-Bar">
            <div className="Page-Projects-Name">
              Project ABC
            </div>
          <a 
            className="Icon-Container" 
            href="https://github.com/settings/profile"
            target="_blank"
          >
            <FontAwesomeIcon 
              className="Icon" 
              icon={['fab', 'github']} 
            />
          </a>
          </div>
          <div className="Page-Projects-Desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
          </div>
          <div className="Page-Projects-Desc">
            React / Python
          </div>
          <img className="Project-Img" src={ProjectPlaceholder} />
        </div>
        <div className="Page-Projects-Container">
          <div className="Page-Projects-Title-Bar">
            <div className="Page-Projects-Name">
              Project XYZ
            </div>
          <a 
            className="Icon-Container" 
            href="https://github.com/settings/profile"
            target="_blank"
          >
            <FontAwesomeIcon 
              className="Icon" 
              icon={['fab', 'github']} 
            />
          </a>
          </div>
          <div className="Page-Projects-Desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
          </div>
          <div className="Page-Projects-Desc">
            React / Python
          </div>
          <img className="Project-Img" src={ProjectPlaceholder} />
        </div>
      </div>
    </div>
  );
}

export default App;
