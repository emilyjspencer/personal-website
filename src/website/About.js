import React from 'react';
import Typical from 'react-typical'
import { Animated } from "react-animated-css";

import Tech from './Tech';
import Header from './Header';


import me2 from './images/cards/me2.png';
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
          <br />
          <div className="typical">
          <Typical loop={Infinity} wrapper="b" steps={['Linguist', 1500, 'Musician', 1500, 'Book-Lover', 1500, 'Problem Solver', 1500, 'Makers Academy Graduate', 1500]}
          />
          </div>
          </Animated>
          <br />
          <br />
      <section class="about-me" id="about">
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