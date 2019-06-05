const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const morgan = require("morgan");

require('dotenv').config();

const server = express(); 
server.use(express.json())
server.use(helmet());
server.use(cors());
server.use(morgan('tiny'));

// const db = require('./config.js');  to access database  

server.get("/", (req, res) => {
  res.send(`WeB APP IS RUNNING...`);
})

// REQUIRE THE ROUTES FROM INDEX.JS IN ROUTES FOLDER 

//FOR EACH ROUTE EXPORTED   SERVER.USE THE END POINT FOR THE ROUTE  

module.exports = server; 