import React from 'react';
import { Animated } from "react-animated-css";

import Tech2 from './Tech2';
import Tech from './Tech';
import Header from './Header';

import me2 from './images/cards/me2.png';
import cherry from './images/cards/cherry2.jpg';
import branch from './images/cards/branch.png';
import flowers7 from './images/cards/flowers7.png';
import flowers7grey from './images/cards/flowers7grey.png';
import './About.css';


const About = () => {
  return (
    <>
    <Header />
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
            <h1>Full Stack<span>Developer</span></h1>
          </div>
          </Animated>
          
      <section class="about-me" id="about">
     <h2 class="about-subtitle">Makers Academy Graduate</h2>
     <br />
      <div class="about-text">
     <br />
     <br />
     

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