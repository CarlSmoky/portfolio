import React from "react";
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

const SocialList = ({addClass}) => {
  
  return (
    <div className={`social-list ${addClass}`}>
      <a href="https://github.com/CarlSmoky" target="_blank" rel="noreferrer">
        <FiGithub />
        <span className="screenreader-only">GitHub Link</span>
      </a>
      <a href="https://www.linkedin.com/in/kaorutsumita/" target="_blank" rel="noreferrer">
        <FiLinkedin />
        <span className="screenreader-only">LinkedIn Link</span>
      </a>
      <a href="https://www.instagram.com/kaoruht" target="_blank" rel="noreferrer">
        <FiInstagram />
        <span className="screenreader-only">Instgram Link</span>
      </a>
    </div>
  )
}

export default SocialList;