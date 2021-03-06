import React from 'react';

import Form from './Form';
import { Animated } from "react-animated-css";
import Animation3 from './Animation3';
import Header from './Header';
import './Form.css';

import flowers7grey from './images/cards/flowers7grey.png';


const Contact = () => {

  return (
    <>
  <Header />
  <div className="contact" id="contact">
      <h1>Contact me</h1>
      <Animation3 />
      <Form />
      <form action="">
        <label className="name" class="name">Name:
            <input type="text" id="name" />
        </label>
        
        <label className="email" class="email">Email:
          <input type="email" id="email" />
        </label>

        <label message="message" class="message">Message:
          <textarea name="" id="message"></textarea>
        </label>

        <input className="button form-button" type="submit" value="SEND" />

      </form>
     
      </div>
      </>
    )

 
 }

 export default Contact;
   
     
   