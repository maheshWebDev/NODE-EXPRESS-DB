
const productData = require('../model/products');

module.exports.addProduct = (req,res)=>{
    const ele = req.body.ele;
    console.log(ele)
    productData.addProduct(ele);
    console.log(productData)
    res.sendStatus(200)
  }