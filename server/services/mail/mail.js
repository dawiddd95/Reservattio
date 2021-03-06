import nodemailer from 'nodemailer'

export const resetPasswordMail = (email, link) => {
   return {
      mailOptions: {
         to : email,
         subject : 'Reset your password in Reservattio',
         html : `
            <h3>hello</h3>
            <p>Follow this link to reset your account password</p>
            <a href="${link}">${link}</a>
            <p>If you didn’t ask to reset your password, you can ignore this email.</p>
            <p>Thanks,</p>
            <p>Your Reservattio Team</p>
         `
      },
   }
}

export const config = {
   transporter: nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: "reservattio.team@gmail.com",
      pass: "QWEDSA!@#123"
   }
})}