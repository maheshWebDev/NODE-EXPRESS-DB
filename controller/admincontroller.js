
const product = require('../model/productModel');

module.exports.addProduct = (req,res)=>{
    let obj = {
      title : req.body.title,
      price : req.body.price,
      imgURL : req.body.imgURL
    }
req.user.createProduct(obj)
   .then(()=>{res.sendStatus(200)})
   .catch((err)=>{})
    
  } 