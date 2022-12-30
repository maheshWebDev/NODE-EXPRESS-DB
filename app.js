const path = require('path')

const express = require('express');

const rootDir = require('./util/path')

const app = express();

const homeRoute = require('./routes/homepagerouter')

const adminRoute = require('./routes/adminrouter')

// globle middelware

app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(rootDir,'public')))

// route middleware

app.use(homeRoute)

app.use(adminRoute)

app.get('/public/css/main.css',(req,res)=>{  
    res.sendFile(path.join(rootDir,'public','css','main.css'))
})

app.use((req,res)=>{
    res.sendFile(path.join(rootDir,'views','404.html'))
})


app.listen(3000,()=>{
    console.log("server is running....!")
})