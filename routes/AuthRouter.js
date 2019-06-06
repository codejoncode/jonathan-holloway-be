require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid/v4'); 
const db = require('../db/models/usersDB.js');


const {
    safeUsrnameSqlLetters,
    safePwdSqlLetters,
    numOfHashes,
} = "../config/globals.js";


router.post("/register", (req, res) => {
 /*Hash the passwords*/
  const credentials = req.body; 
  const hash = bcrypt.hashSync(credentials.password, numOfHashes);
  credentials.password = hash; 
});

router.post("/login", (req.res) => {
  /*find the user in the database by it's user name then  */
  const user = db.getUserByUsername(req.body.username);
  const credentials = req.body;

  if (!user || !bcrypt.compareSync(credentials.password, user.password)){
      return res.status(401).json({error: 'Incorrect credntials'});
  }
})
