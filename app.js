const express = require("express");
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');



app.set("view engine","ejs");


//create home route

//setup routes
app.use('/auth', authRoutes);
app.get('/',(req,res)=>res.render("home"));

app.listen(3000,()=>{
    console.log("app started for requests on port 3000");
});