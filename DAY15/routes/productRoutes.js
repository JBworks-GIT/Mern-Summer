const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const productRouter= express.Router();


productRouter.route("/").get(getProducts).post(createProduct);


module.exports = productRouter;