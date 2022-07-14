import React from 'react';
import image from '../img/image1.jpg';
import profilePhoto from '../img/image5.jpg';


const Home = () => {
  return (
    <div className="c-home" >
      <section className="c-home__my-name">
        <img className="c-home__profile_photo" src={profilePhoto} alt="profile_photo"/>
        <h3>Kaoru Tsumita</h3>
      </section>
    </div>
  )
}

export default Home