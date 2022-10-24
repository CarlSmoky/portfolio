import React, { useState } from 'react';
import Tooltip from "./Tooltip";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = ({isMobile}) => {
  console.log(isMobile);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav className="nav">
      <Tooltip text="Home">
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
          <AiOutlineHome />
        </a>
      </Tooltip>
      <Tooltip text="About">
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
          <AiOutlineUser />
        </a>
      </Tooltip>
      <Tooltip text="Skill">
        <a href="#skills" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}>
          <BiCodeAlt />
        </a>
      </Tooltip>
      <Tooltip text="Project">
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>
          <FaLaptopCode />
        </a>
      </Tooltip>
      <Tooltip text="Mail">
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
          <HiOutlineMail />
        </a>
      </Tooltip>
    </nav>
  )
}

export default Navbar;