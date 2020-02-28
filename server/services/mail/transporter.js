const nodemailer = require('nodemailer');

module.exports = {
   transporter: nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: "venture.managment.app.team@gmail.com",
         pass: "Dawid1995"
      }
   })
}
