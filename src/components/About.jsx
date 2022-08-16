import React from 'react';
import profilePhoto from '../img/image5.jpg';

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
        <div className="about__text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde possimus expedita quam error aspernatur, distinctio libero voluptatibus reiciendis fugiat nisi dolores incidunt, alias aliquam? Ex ratione laboriosam amet neque mollitia.</p>
        </div>
      </div>
    </section>
  )
}

export default About