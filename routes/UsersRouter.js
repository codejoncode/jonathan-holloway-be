require('dotenv').config();
const express = require('express');
const usersDB = require('../db/models/usersDB.js');
const router = express.Router();


router.get("/", (req, res) => {
  return usersDB
   .getUsers()
   .then(results => res.status(401).json({error: "No access allowed"}))
   .catch(err => res.status(500).json({error: `Failed to get users ${err}`}))
})



module.exports = router; 