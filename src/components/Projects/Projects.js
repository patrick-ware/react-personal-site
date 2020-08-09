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
        <img className="Project-Img" src={ProjectPlaceholder} />
      </div>
      <div className="Page-Projects-Container">
        <div className="Page-Projects-Title-Bar">
          <div className="Page-Projects-Name">
            Project XYZ
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
        <img className="Project-Img" src={ProjectPlaceholder} />
      </div>
    </div>
  );
}

export default Projects;
