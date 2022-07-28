import React from 'react'
import image from '../img/Little_Library_Home_Mobile.png';

const Projects = () => {
  return (
    <section className="section-projects">

      <div className="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
          Most popular Projects
        </h2>
      </div>

      <div className="cards">
        <div className="card">
          <img src={image} />
          <div className="card-body">
            <h2>Little Library</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>Kaoru & Jeff</h5>
          </div>
        </div>

        <div className="card">
          <img src={image} />
          <div className="card-body">
            <h2>Little Library</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>Kaoru & Jeff</h5>
          </div>
        </div>

        <div className="card">
          <img src={image} />
          <div className="card-body">
            <h2>Little Library</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>Kaoru & Jeff</h5>
          </div>
        </div>

        <div className="card">
          <img src={image} />
          <div className="card-body">
            <h2>Little Library</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>Kaoru & Jeff</h5>
          </div>
        </div>

        <div className="card">
          <img src={image} />
          <div className="card-body">
            <h2>Little Library</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>Kaoru & Jeff</h5>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Projects