import React from "react";
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiMongodb } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinux } from 'react-icons/fa';

const Skills = ( { skillRef }) => {
  return (
    <section className="section-skills u-center-text u-margin-bottom-small" id="skills" ref={skillRef}>
      <h2 className="heading-secondary u-margin-bottom-big">
        Skills
      </h2>
      <div className="skills__container">
        <ul className="skills__list">
          <li className="skills__list-items">
            <SiJavascript />
            <span className="skills__list-name">JavaScript <br/>(ES6)</span>
          </li>
          <li className="skills__list-items">
            <SiReact />
            <span className="skills__list-name">React</span>
          </li>
          <li className="skills__list-items">
            <FaNodeJs />
            <span className="skills__list-name">Node.js</span>
          </li>
          <li className="skills__list-items">
            <FaSass />
            <span className="skills__list-name">Sass</span>
          </li>
          <li className="skills__list-items">
            <SiPostgresql />
            <span className="skills__list-name">PostgreSQL</span>
          </li>
          <li className="skills__list-items">
            <SiMongodb />
            <span className="skills__list-name">MongoDB</span>
          </li>
          <li className="skills__list-items">
            <GrMysql />
            <span className="skills__list-name">MySQL</span>
          </li>
          <li className="skills__list-items">
            <FaHtml5 />
            <span className="skills__list-name">HTML5</span>
          </li>
          <li className="skills__list-items">
            <FaCss3Alt />
            <span className="skills__list-name">CSS3</span>
          </li>

          <li className="skills__list-items">
            <FaPhp />
            <span className="skills__list-name">PHP</span>
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
            <FaLinux />
            <span className="skills__list-name">Linux</span>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default Skills;