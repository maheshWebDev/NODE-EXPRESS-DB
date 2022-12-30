const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','add-products.html'))
})

module.exports = router;