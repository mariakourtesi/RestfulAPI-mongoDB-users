const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config();
require('./database/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded()); 

//set up route handlers

app.get("/users", (req, res) => {
    res.send({
        name: "Maria",
        email: "maria@test.com"
    })
  });



module.exports = app

