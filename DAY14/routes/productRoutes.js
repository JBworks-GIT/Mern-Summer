const express = require("express");
const {getProduct, createProducts} = require("../controllers/productControllers.js");


const productRouter = express.Router();

productRouter.route("/").get(getProduct).post(createProducts);

module.exports = productRouter;
