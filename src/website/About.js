import React from 'react';
import Emily from './me.png';
import './About.css';


const About = () => {
  return (
    <div className="body">
      <h1>About Emily</h1>
      {''}
      {''}
      <img id="emily" src={Emily} />
      
      
      <div className="container-all">
    <div className="welcome" id="home">
      <h1>Emily<span>Spencer</span></h1>
      <div className="col-sm-6">  
      </div>
      <section class="intro">
      <div class="intro-left">
        <img src="spring.gif" alt="spring"></img>
      </div>
      <div class="intro-middle">
        <h2>I will put some text here</h2>
        <p>This will be filled with lots of information about me etc</p>
      </div>
      <div class="intro-right">
        <img src="spring.gif" alt="spring"></img>
      </div>
    </section>

    <section class="about-me" id="about">

      <h2 class="about-subtitle">Fullstack Developer and graduate of Makers Academy</h2>
      <div class="about-text">
      
      </div>
    </section>
      </div>
    </div>
    </div>
  )
}

export default About;