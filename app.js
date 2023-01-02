
const express = require('express');

const app = express();

const homeRoute = require('./routes/homepagerouter')

const adminRoute = require('./routes/adminrouter')

const db = require('./util/dbConnection')

const product = require('./model/productModel');

const user = require('./model/userModel')



// globle middelware

app.use(express.json())

app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    user.findByPk(1)
    .then((result)=>{
        req.user = result
        next();
    })
})


// route middleware

app.use(homeRoute) 

app.use(adminRoute)

// associations
product.belongsTo(user);

user.hasMany(product)

db.sync().then((result)=>{
// console.log(result);
 return user.findByPk(1)
})
.then((use)=>{
    if(!use){
        user.create({name:"mahesh",email:"mahesh02@gmail.com"})
    }
    console.log(use)
})
.catch((err)=>{
    console.log(err);
})


app.listen(3000,()=>{
    console.log("server is running....!")
})