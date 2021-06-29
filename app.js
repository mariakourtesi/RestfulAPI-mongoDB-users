const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded()); 



   

app.listen(process.env.PORT || 5000, () =>{
    console.log('Server is up and running 🚀');
});