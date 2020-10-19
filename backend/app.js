const express = require('express');
const app = express();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "emilyspencer89@hotmail.co.uk",
  from: "test@example.com",
  subject: "Testing sending from portfolio",
  text: "Hi, I think your website is too girly",
  html: "It would be better if you made it look more professional",
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })




app.listen(5000, function () {
    console.log('Server is listening on port 5000. Ready to accept requests!');
});



