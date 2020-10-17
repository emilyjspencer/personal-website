import React from 'react';


const Contact = () => {

  return (
  <div className="contact" id="contact">
      <h1>Contact me</h1>
      <form action="">
        <label className="name" class="name">Name:
            <input type="text" id="name"> /></input>
        </label>
        
        <label className="email" class="email">Email:
          <input type="email" id="email"> /></input>
        </label>

        <label message="message" class="message">Message:
          <textarea name="" id="message"></textarea>
        </label>

        <input className="button form-button" type="submit" value="SEND"> /</input>

      </form>
      </div>
    )

 
 }

 export default Contact;
   
     
   