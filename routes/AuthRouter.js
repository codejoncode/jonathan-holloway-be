require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); 
const db = require('../db/models/usersDB.js');

const {
  generateToken,

} = require("../config/middleware/authenticate.js");

const requestClientIP = require('../config/middleware/requestClientIp.js');

const {
    numOfHashes,
} = "../config/globals.js";


router.post("/register", (req, res) => {
 /*Hash the passwords*/
  const credentials = req.body; 
  if (req.body.username !== "mrHollowaySE"){
    return res.status(401).json({error: "Only the developer of this application is permitted to register. Backend was only created for emailing and blog purposes."})
 }

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
  try {
      user = user[0]; 
      const credentials = req.body;
      if (req.body.username !== "mrHollowaySE"){
        return res.status(401).json({error: "Only the developer of this application is permitted to login. Backend was only created for emailing and blog purposes."})
     }
      if (!user || !bcrypt.compareSync(credentials.password, user.password)){
          return res.status(401).json({error: 'Incorrect credntials'});
      } else {
          const token = await generateToken(user.username, user.id, '100d');
    
          return res.status(200).json({token});
      }

  } catch (error) {
    return res.status(500).json({err: `Problem getting the login to work ${error}`})
  }

  
})

module.exports = router; 
