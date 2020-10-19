import React, { Component } from 'react';

import './Form.css';


class Form extends Component {
    constructor(props)  {
        super(props)
    
        this.handleSubmit = this.handleSubmit.bind(this)
  
    }    

  handleSubmit(event) {
    event.preventDefault();
    const data = event.target.value;

    fetch('/backend/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="first name">Enter first name</label>
        <input id="firstname" name="firstname" type="text" />

        <label htmlFor="last name">Enter last name</label>
        <input id="lastname" name="lastname" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="message">Enter your message</label>
        <input id="message" name="message" type="text" />

        <button>Send</button>
      </form>
    );
  }}



export default Form;