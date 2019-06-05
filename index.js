const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const morgan = require("morgan");

require('dotenv').config();

const server = express(); 
server.use(express.json())
server.use(helmet());
server.use(cors());
server.use(morgan());

const db = require('./config.js');
