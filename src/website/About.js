import React from 'react';
import {Animated} from "react-animated-css";

import Tech from './Tech';

import me2 from './images/cards/me2.png';
import cherry from './images/cards/cherry2.jpg';
import branch from './images/cards/branch.png';
import './About.css';


const About = () => {
  return (
    <>
    <div className="body">
      <div className="container-all">
        <div className="welcome" id="home">
        <Animated animationInDuration="4000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div className="container">
           <img className="me2" src={me2} />
          </div>
          </Animated>
         <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div>
            <h1>Emily<span>Spencer</span></h1>
          </div>
          </Animated>
          
      <section class="about-me" id="about">
     <h2 class="about-subtitle">Fullstack Developer and graduate of Makers Academy</h2>
     <br />
      <div class="about-text">
      <p>As a Modern Languages graduate turned developer, I like to think of myself as having swapped the study of human languages for
      <br />programming languages</p>
      </div>
    </section>
      </div>
      <Tech />
    </div>
    </div>
    </>
  )
}

export default About;