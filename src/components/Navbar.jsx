import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav className="nav">
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={()=> setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}><BiCodeAlt /></a>
      <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><FaLaptopCode /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiOutlineMail /></a>
    </nav>
  )
}

export default Navbar;