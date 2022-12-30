

const express = require('express');

const productData = require('../util/products')

const router = express.Router();

router.post('/add-product',(req,res)=>{
  const ele = req.body.ele;
  console.log(ele)
  productData.addProduct(ele);
  console.log(productData)
  res.sendStatus(200)
})

module.exports = router;