import React, { useState } from 'react';
import Tooltip from "./Tooltip";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = ({isMobile}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav className="nav">
      <div className="nav__social-list">
      <Tooltip text="Home">
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
          <AiOutlineHome />
          <span class="screenreader-only">Home</span>
        </a>
      </Tooltip>
      <Tooltip text="About">
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
          <AiOutlineUser />
          <span class="screenreader-only">About</span>
        </a>
      </Tooltip>
      <Tooltip text="Skill">
        <a href="#skills" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}>
          <BiCodeAlt />
          <span class="screenreader-only">Skill</span>
        </a>
      </Tooltip>
      <Tooltip text="Project">
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>
          <FaLaptopCode />
          <span class="screenreader-only">Project</span>
        </a>
      </Tooltip>
      <Tooltip text="Mail">
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
          <HiOutlineMail />
          <span class="screenreader-only">Mail</span>
        </a>
      </Tooltip>
      </div>
      <span className="nav__copyright">&copy;{currentYear} Kaoru in Toronto, All rights reserved.</span>
    </nav>
  )
}

export default Navbar;