
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: "lajoiedevivre89@gmail.com", 
  from: "emilyspencer89@hotmail.co.uk", 
  subject: "Site improvements",
  text: "Add image carousels",
  html: "Is this working?",
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })