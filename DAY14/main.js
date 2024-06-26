require("dotenv").config();//keep on top akways
const {productsCollection}=require("./database/db.js");
const express = require('express');
const {getProduct, createProducts} = require("./controllers/productControllers.js")
const app = express();

app.use(express.json());// to use body parser 

app.get("/products",getProduct);
app.post("/products",createProducts); 

app.listen(process.env.PORT,()=>{
  console.log(`App is running on port ${process.env.PORT}`);
});



