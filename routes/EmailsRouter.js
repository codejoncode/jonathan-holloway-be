require("dotenv").config();
const express = require("express");
const emailsDB = require("../db/models/emailsDB.js");
const router = express.Router();

const requestClientIp = require("../config/middleware/requestClientIp.js");

const {
    transporter,
    getMailOptions 
 } = require('../config/nodeMailerConfig.js')

const validateEmail = (email) => {
  const lowerCase = email.toLowerCase(); 
  var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
  return re.test(lowerCase);
}

router.post("/send", requestClientIp, (req, res) => {
  const { message, email, company, name, clientIp } = req.body;
  if (name.length < 3) {
    return res.status(409).json({error: "Please enter a valid name"}, this.handleOpen())
  } else if (text.length < 15 ) {
    return res.status(409).json({error: "Your message seems a bit slim."}, this.handleOpen())
  } else if ((company.length < 4)){
    return res.status(409).json({error: "Please enter your company name"}, this.handleOpen())
  } else if (!(validateEmail(email))) {
    return res.status(409).json({error: "Please enter a valid email."}, this.handleOpen())
  }
  const mailOptions = getMailOptions(
    "send-email",
    email,
    message,
    company,
    name,
    clientIp
  );
  return transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return res.status(500).json({ error: `Failed to send email : ${error}` });
    } else {
      return res.status(201).json({
        message: "Successfully sent email"
      });
    }
  });
});

module.exports = router;
