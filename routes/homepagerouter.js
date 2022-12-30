

const express = require('express');

const productData = require('../util/products')

const router = express.Router();

router.get('/',(req,res)=>{
const sendDataTOFront = productData.products;
res.send(sendDataTOFront)
})

module.exports = router;