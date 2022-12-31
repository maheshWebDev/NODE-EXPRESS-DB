

const express = require('express');

const adminController = require('../controller/admincontroller')

const router = express.Router();

router.post('/add-product',adminController.addProduct)

module.exports = router;