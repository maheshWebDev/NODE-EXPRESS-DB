const product = require('../model/productModel');
const user = require('../model/userModel');

module.exports.getHomePage = (req,res)=>{
    product.findAll({include:user})
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
    
    }