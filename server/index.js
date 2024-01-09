const dotenv =require('dotenv');

const express = require('express');
const mongoose =require('mongoose');

const bodyParser = require('body-parser');
const userroute= require('./route/User.js');
const cors= require('cors');
const app=express();

dotenv.config();

app.use(bodyParser.json());
app.use(cors());



const PORT= process.env.PORT||7070;

const URL =process.env.MOGOURL;
app.use("/api/v1/user",userroute);

mongoose.connect(URL).then(()=>{
   console.log("DB Connected SucessFully");
   app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
   })
}).catch(error =>console.log(error));



