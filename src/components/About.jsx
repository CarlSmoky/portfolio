import React from 'react';
import profilePhoto from '../img/image5.jpg';
// import SkillList from "./SkillList";

const About = ( { aboutRef, isAboutVisible } ) => {
  return (
    <section className="section-about u-center-text" id="about" ref={aboutRef}>
      <div className="heading-secondary">
        {isAboutVisible ? <h2 className={`animation-fadein-left`}> 
        About Me
        </h2>
        : ""}
      </div>
      <div className="about__box">
        <div className="about__image">
          <img className="about__image--photo" src={profilePhoto} alt="profile_photo" />
        </div>
        <div className="about__description">
          <div className="about__text">
            <p className="about__paragraph">I’ve recently transitioned into a career as a full stack developer, and I’m excited by all the possibilities in modern web technology and the opportunities they can provide, and am driven to learn and continuously improve my own skills. Bridging the gap between people and technology to make lives easier is a crucial motivation for me.</p>
          </div>
          <div className="section-skill">
          </div>
        </div>
      </div>
    </section>
  )
}

export default About