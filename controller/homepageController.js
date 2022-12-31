const productData = require('../model/products');

module.exports.getHomePage = (req,res)=>{
    res.send(productData.getAllProduct(productData.products))
    }