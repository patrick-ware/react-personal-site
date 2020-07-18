import React from 'react';
import './AboutMe.css';
import Headshot from '../../static/Headshot_Color.JPG'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas)

function AboutMe(props) {
  return (
  <div className="Page-About" id="about">
    <div className="Page-Title">
      About Me
    </div>
    <div className="Page-About-Container">
      <img className="Headshot" src={Headshot}/>
      <div className="Page-About-Title-Bar">
        <div className="Page-About-Greeting">
          Hi, I'm Patrick!
        </div>
        <div className="Links">
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
        <a 
          className="Icon-Container"
          href="https://www.linkedin.com/in/patrick-ware/"
          target="_blank"
        >
          <FontAwesomeIcon 
            className="Icon" 
            icon={['fab', 'linkedin-in']} 
          />
        </a>
        <div className="Icon-Container">
          <FontAwesomeIcon 
            className="Icon" 
            icon={['fas' , 'file-pdf']} 
          />
        </div>
      </div>
    </div>
    <div className="Page-About-Bio"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
    </div>
  </div>
  );
}

export default AboutMe;
