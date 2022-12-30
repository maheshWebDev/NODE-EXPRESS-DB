
const express = require('express');

const app = express();

const homeRoute = require('./routes/homepagerouter')

const adminRoute = require('./routes/adminrouter')

// globle middelware

app.use(express.json())

app.use(express.urlencoded({extended:false}));


// route middleware

app.use(homeRoute)

app.use(adminRoute)


app.listen(3000,()=>{
    console.log("server is running....!")
})