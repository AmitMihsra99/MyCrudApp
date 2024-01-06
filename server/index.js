const express = require('express');
const mongoose =require('mongoose');

const bodyParser = require('body-parser');
const dotenv =require('dotenv');
const userroute= require('./route/user.js');
const cors= require('cors');
const app=express();


app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT= process.env.PORT||7070;

const URL =process.env.MOGOURL;

mongoose.connect(URL).then(()=>{
   console.log("DB Connected SucessFully");
   app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
   })
}).catch(error =>console.log(error));


app.use("/api/v1/user",userroute);
