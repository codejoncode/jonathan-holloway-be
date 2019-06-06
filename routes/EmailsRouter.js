require("dotenv").config();
const express = require("express");
const emailsDB = require("../db/models/emailsDB.js");
const router = express.Router();

const requestClientIp = require("../config/middleware/requestClientIp.js");

const {
    transporter,
    getMailOptions 
 } = require('../config/nodeMailerConfig.js')

router.get("/", (req, res) => {
  return emailsDB
    .getEmails()
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get emails ${err}` })
    );
});

router.post("/send", requestClientIp, (req, res) => {
  const { message, email, company, name, clientIp } = req.body;
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
