const express = require('express');
const mongoose =  require ('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); //js middleware
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGODB_URL;

mongoose.connect(url,{
    useNewUrlParser :true,
    useUnifiedTopology :true
});


const connection = mongoose.connection;
// 
connection.once("open",() =>{
    console.log("MongoDb connected!");
});

// http://localhost:5000/Student

const StudentForm = require('./routes/From.js');
app.use("/Student",StudentForm);

app.listen(port,()=>{
    console.log("PORT connected on "+port);
})
// Routes, Controllers, Models
// route contains all the routes, controller contains all the functions which are assosiated with the route
// This is from new server.js