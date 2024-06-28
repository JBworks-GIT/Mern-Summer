const express = require('express');
const { getProducts, createProduct, replaceProduct,updateProduct,deleteProduct } = require('../controllers/productController');
const productRouter= express.Router();


productRouter.route("/").get(getProducts).post(createProduct);
productRouter.route("/:id").put(replaceProduct).patch(updateProduct).delete(deleteProduct);

module.exports = productRouter;