require("dotenv").config();//keep on top akways
const express = require('express');
const productRouter = require("./routes/productRoutes");
const app = express();

app.use(express.json());// to use body parser 

app.use("/products" ,productRouter);

app.listen(process.env.PORT,()=>{
  console.log(`App is running on port ${process.env.PORT}`);
});



