var nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  service: "mail.privateemail.com",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports = transporter;
