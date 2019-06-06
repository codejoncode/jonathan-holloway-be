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
  console.log(credentials)
  const hash = bcrypt.hashSync(credentials.password, numOfHashes);
  credentials.password = hash; 
  db
    .registerUser(credentials)
    .then(result =>  res.status(200).json(result))
    .catch(err => res.status(500).json({error: `Failed register user ${err}`}))
});

router.post("/login", async (req,res) => {
  /*find the user in the database by it's user name then  */
  let user = await db.getUserByUsername(req.body.username);  // returns an array 
  user = user[0]; 
  const credentials = req.body;

  if (!user || !bcrypt.compareSync(credentials.password, user.password)){
      return res.status(401).json({error: 'Incorrect credntials'});
  } else {
      return res.status(200).json({success: "Successfully logged in"});
  }
})

module.exports = router; 
