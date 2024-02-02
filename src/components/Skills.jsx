import React from "react";
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiReact } from 'react-icons/si';
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaSass } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiMongodb } from 'react-icons/si';
import { FaLinux } from 'react-icons/fa';
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';

const Skills = ( { skillRef, isSkillVisible }) => {
  return (
    <section className="section-skills u-center-text" id="skills" ref={skillRef}>
      <div className="heading-secondary">
      {isSkillVisible ? <h2 className={`animation-fadein-left`}>
        Skills
      </h2> : ""}
      </div>
      <div className="skills__container">
        <ul className="skills__list">
          <li className="skills__list-items">
            <SiJavascript />
            <span className="skills__list-name">JavaScript <br/>(ES6)</span>
          </li>
          <li className="skills__list-items">
            <SiTypescript />
            <span className="skills__list-name">TypeScript</span>
          </li>
          <li className="skills__list-items">
            <FaNode />
            <span className="skills__list-name">Node.js</span>
          </li>
          <li className="skills__list-items">
            <SiReact />
            <span className="skills__list-name">React</span>
          </li>
          <li className="skills__list-items">
            <SiNextdotjs />
            <span className="skills__list-name">Next.js</span>
          </li>
          <li className="skills__list-items">
            <SiTailwindcss />
            <span className="skills__list-name">Tailwind</span>
          </li>
          <li className="skills__list-items">
            <SiStyledcomponents />
            <span className="skills__list-name">Styled components</span>
          </li>
          <li className="skills__list-items">
            <FaSass />
            <span className="skills__list-name">Sass</span>
          </li>
          <li className="skills__list-items">
            <FaPhp />
            <span className="skills__list-name">PHP</span>
          </li>
          <li className="skills__list-items">
            <FaPython />
            <span className="skills__list-name">Python</span>
          </li>
          <li className="skills__list-items">
            <SiPostgresql />
            <span className="skills__list-name">PostgreSQL</span>
          </li>
          <li className="skills__list-items">
            <GrMysql />
            <span className="skills__list-name">MySQL</span>
          </li>
          <li className="skills__list-items">
            <SiMongodb />
            <span className="skills__list-name">MongoDB</span>
          </li>
          <li className="skills__list-items">
            <FaLinux />
            <span className="skills__list-name">Linux</span>
          </li>
          <li className="skills__list-items">
            <FaAws />
            <span className="skills__list-name">AWS</span>
          </li>
          <li className="skills__list-items">
            <FaGitAlt />
            <span className="skills__list-name">git</span>
          </li>
          <li className="skills__list-items">
            <FaGithub />
            <span className="skills__list-name">GitHub</span>
          </li>
          <li className="skills__list-items">
            <FaHtml5 />
            <span className="skills__list-name">HTML5</span>
          </li>
          <li className="skills__list-items">
            <FaCss3Alt />
            <span className="skills__list-name">CSS3</span>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default Skills;