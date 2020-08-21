import React from 'react';
import ProjectPlaceholder from '../../static/project-placeholder.png'
import './Projects.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas)

function Projects(props) {
  return (
    <div className="Page-Projects" id="projects">
      <div className="Page-Projects-Title">
        Projects
      </div>
      <div className="Page-Projects-Container">
        <div className="Page-Projects-Title-Bar">
          <div className="Page-Projects-Name">
            Project ABC
          </div>
          <div className="Project-Icon-Container">
            <a
              className="Icon-Container" 
              href="https://github.com/settings/profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon 
                className="Icon" 
                icon={['fab', 'github']} 
              />
            </a>
            <a 
              className="Icon-Container" 
              href="https://github.com/settings/profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon 
                className="Icon" 
                icon={['fas', 'link']} 
              />
            </a>
          </div>
        </div>
        <div className="Page-Projects-Desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
        </div>
        <div className="Page-Projects-Desc">
          React / Python
        </div>
        <img className="Project-Img" alt="Quarantine & Chill placeholder" src={ProjectPlaceholder} />
      </div>
      <div className="Page-Projects-Container">
        <div className="Page-Projects-Title-Bar">
          <div className="Page-Projects-Name">
            Quarantine & Chill
          </div>
          <div className="Project-Icon-Container">
            <a 
              className="Icon-Container" 
              href="https://github.com/settings/profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon 
                className="Icon" 
                icon={['fab', 'github']} 
              />
            </a>
            <a 
              className="Icon-Container" 
              href="https://quarantine-chill.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon 
                className="Icon" 
                icon={['fas', 'link']} 
              />
            </a>
          </div>
        </div>
        <div className="Page-Projects-Desc">
          A full stack web app that generates movie and meal pairings for you, and allows you to browse and add to community favorites. Try it out!
        </div>
        <div className="Page-Projects-Desc-Minor">
          React / Node.js / Express / MongoDB 
        </div>
        <img className="Project-Img" alt="Quarantine & Chill placeholder" src={ProjectPlaceholder} />
      </div>
    </div>
  );
}

export default Projects;
