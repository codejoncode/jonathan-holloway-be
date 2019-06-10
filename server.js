const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const morgan = require("morgan");

require('dotenv').config();

const server = express(); 
server.use(express.json())
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

// const db = require('./config.js');  to access database  

server.get("/", (req, res) => {
  res.send(`WeB APP IS RUNNING...`);
})

//Routes/Endpoints 
const {
  usersRouter, 
  emailsRouter,
  blogsRouter,
  authRouter,
} = require('./routes/index.js');

// REQUIRE THE ROUTES FROM INDEX.JS IN ROUTES FOLDER 

//FOR EACH ROUTE EXPORTED   SERVER.USE THE END POINT FOR THE ROUTE 

server.use('/blogs', blogsRouter);
server.use('/emails', emailsRouter);
server.use('/users', usersRouter); 
server.use('/auth', authRouter);
server.use ("/projects", projectsRouter)

module.exports = server; 