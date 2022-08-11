import React from 'react';
import profilePhoto from '../img/image5.jpg';

const About = () => {
  return (
    <section className="section-about" id="about" >
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-secondary">
          About
        </h2>
      </div>
      <div className="section-about__my-name">
        <img className="section-about__profile_photo" src={profilePhoto} alt="profile_photo" />
        <h3>Kaoru Tsumita</h3>
      </div>
    </section>
  )
}

export default About