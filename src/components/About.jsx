import React from 'react';
import profilePhoto from '../img/image5.jpg';
// import SkillList from "./SkillList";

const About = () => {
  return (
    <section className="section-about" id="about" >
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-secondary">
          About Me
        </h2>
      </div>
      <div className="about__box">
        <div className="about__image">
          <img className="about__image--photo" src={profilePhoto} alt="profile_photo" />
        </div>
        <div className="about__description">
          <div className="about__text">
            <p>I’ve recently transitioned into a career as a full stack developer, and I’m excited by all the possibilities in modern web technology and the opportunities they can provide, and am driven to learn and continuously improve my own skills. Bridging the gap between people and technology to make lives easier is a crucial motivation for me.</p>
          </div>
          <div className="section-skill">
            {/* <SkillList></SkillList> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About