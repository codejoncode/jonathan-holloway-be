require('dotenv').config();
const express = require('express');
const emailsDB = require('../db/models/emailsDB.js');
const router = express.Router();

router.get("/", (req, res) => {
  return emailsDB
   .getEmails()
   .then(results => res.status(200).json(results))
   .catch(err => res.status(500).json({error: `Failed to get emails ${err}`}))
})

module.exports = router; 