const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/shop',(req,res)=>{
res.sendFile(path.join(rootDir,'views','homePage.html'));
})

module.exports = router;