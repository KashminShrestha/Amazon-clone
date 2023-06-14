const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
function sendEmail(mailOption) {


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: mailOption.from, // sender address
    to: mailOption.to, // list of receivers
    subject: mailOption.subject, // Subject line
    text: mailOption.text, // plain text body
    html: mailOption.html, // html body
  });

  console.log("Message sent")

}

module.exports = sendEmail

