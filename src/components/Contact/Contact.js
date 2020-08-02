import React from 'react';
import './Contact.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas)

function Contact(props) {
  return (
  <div>
      <div className="Page-Contact" id="contact">
        <div className="Page-Contact-Title">
          Contact Me
        </div>
        <div className="Page-Contact-Container">
          <div className="Page-Contact-Text">
   I'm currently seeking new opportunities in software engineering. If you are interested in working with me, or just want to code, the best way to get in touch is via email:
          </div>
        <div className="Page-Contact-Email">
          patrick.r.ware@gmail.com
        </div>
        <div className="Links-Contact">
          <a 
            className="Icon-Container-Contact" 
            href="mailto:patrick.r.ware@gmail.com & subject=Reaching out"
          >
            <FontAwesomeIcon 
              className="Icon" 
              icon={['fas', 'envelope']} 
            />
          </a>
          <a 
            className="Icon-Container-Contact" 
            href="https://github.com/settings/profile"
            target="_blank"
          >
            <FontAwesomeIcon 
              className="Icon" 
              icon={['fab', 'github']} 
            />
          </a>
        <a 
          className="Icon-Container-Contact"
          href="https://www.linkedin.com/in/patrick-ware/"
          target="_blank"
        >
          <FontAwesomeIcon 
            className="Icon" 
            icon={['fab', 'linkedin-in']} 
          />
        </a>
        <div className="Icon-Container-Contact">
          <FontAwesomeIcon 
            className="Icon" 
            icon={['fas' , 'file-pdf']} 
          />
        </div>
      </div>
      </div>
    </div>
  </div>
  );
}

export default Contact;
