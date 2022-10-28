import React from "react";
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

const SocialList = ({addClass}) => {
  
  return (
    <div className={`social-list ${addClass}`}>
      <a href="https://github.com/CarlSmoky" target="_blank" rel="noreferrer">
        <FiGithub />
        <span class="screenreader-only">GitHub Link</span>
      </a>
      <a href="https://www.linkedin.com/in/kaorutsumita/" target="_blank" rel="noreferrer">
        <FiLinkedin />
        <span class="screenreader-only">LinkedIn Link</span>
      </a>
      <a href="https://www.instagram.com/kaoruht" target="_blank" rel="noreferrer">
        <FiInstagram />
        <span class="screenreader-only">Instgram Link</span>
      </a>
    </div>
  )
}

export default SocialList;