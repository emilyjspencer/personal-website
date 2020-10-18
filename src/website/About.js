import React from 'react';
import Emily from './me.png';
import './About.css';


const About = () => {
  return (
    <div className="body">
      <div className="container-all">
    <div className="welcome" id="home">
      <br />
      <br />
    <img id="emily" src={Emily} />
      <h1>Emily<span>Spencer</span></h1>
    <section class="about-me" id="about">
     <h2 class="about-subtitle">Fullstack Developer and graduate of Makers Academy</h2>
     <br />
      <div class="about-text">
      <p>As a Modern Languages graduate turned developer, I like to think of myself as having swapped the study of human languages for
      <br />programming languages</p>
      </div>
    </section>
      </div>
    </div>
    </div>
  )
}

export default About;