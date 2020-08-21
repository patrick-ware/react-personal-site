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
    {/*<div className="Page-Title">
      About Me
    </div> */}
    <div className="Page-About-Container">
      <img className="Headshot" alt="headshot of Patrick Ware" src={Headshot}/>
      <div className="Page-About-Title-Bar">
        <div className="Page-About-Greeting">
          Hi, I'm Patrick!
        </div>
        <div className="Links">
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
          href="https://www.linkedin.com/in/patrick-ware/"
          target="_blank"
          rel="noopener noreferrer"
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
    <div className="Page-About-Bio"> I'm a software developer living in the Bay Area. I believe in the value of good data and the importance of efficient design. Check out some of my projects below! </div>
<div className="Links-bottom">
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
          href="https://www.linkedin.com/in/patrick-ware/"
          target="_blank"
          rel="noopener noreferrer"
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
  </div>
  );
}

export default AboutMe;
