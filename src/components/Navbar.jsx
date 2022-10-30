import React, { useState } from 'react';
import Tooltip from "./Tooltip";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = ({isMobile, isVisible}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <nav className="nav">
      <div className="nav__social-list">
      <Tooltip text="Home">
        <a href="#home"  className={isVisible.isHeaderVisible ? 'active' : ''}>
          <AiOutlineHome />
          <span class="screenreader-only">Home</span>
        </a>
      </Tooltip>
      <Tooltip text="About">
        <a href="#about"  className={isVisible.isAboutVisible  ? 'active' : ''}>
          <AiOutlineUser />
          <span class="screenreader-only">About</span>
        </a>
      </Tooltip>
      <Tooltip text="Skill">
        <a href="#skills"  className={isVisible.isSkillVisible  ? 'active' : ''}>
          <BiCodeAlt />
          <span class="screenreader-only">Skill</span>
        </a>
      </Tooltip>
      <Tooltip text="Project">
        <a href="#projects"  className={isVisible.isProjectVisible  ? 'active' : ''}>
          <FaLaptopCode />
          <span class="screenreader-only">Project</span>
        </a>
      </Tooltip>
      <Tooltip text="Mail">
        <a href="#contact"  className={isVisible.isContactVisible  ? 'active' : ''}>
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