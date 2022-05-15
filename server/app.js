// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

// app
const app = express();

//db


// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true}));

// routes



//port
