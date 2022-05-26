// import modules
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");
const { json } = require('express');

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/leagues', require('./routes/leagues'))

//listener
app.listen(5000, () => {
  console.log("server has started on port 5000")
});