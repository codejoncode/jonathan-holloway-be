require('dotenv').config();
const express = require('express');
const blogsDB = require('../db/models/blogsDB.js');
const router = express.Router();

//may want to bring in a helper to authenticate for posts only done by one user edit only by one user  everyone else can view 

router.get('/', (req, res) => {
  return blogsDB
  .getBlogPosts()
  .then(results => res.status(200).json(results))
  .catch(err => res.status(500).jsoon({error: `Failed to get blog posts ${err}`}))
});




module.exports = router; 