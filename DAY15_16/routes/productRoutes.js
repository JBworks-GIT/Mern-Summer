const express = require('express');
const { getProducts, createProduct, replaceProduct,updateProduct,deleteProduct,checkId,listProducts } = require('../controllers/productController');
const productRouter= express.Router();

productRouter.route("/").get(getProducts).post(createProduct);

productRouter.route("/list").get(listProducts);
productRouter.route("/:id").put(checkId, replaceProduct).patch(checkId , updateProduct).delete(checkId ,deleteProduct);

module.exports = productRouter;