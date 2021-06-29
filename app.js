const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded()); 

app.get("/test", async (req, res) => {
    res.json({ message: "pass!" });
  });


module.exports = app

