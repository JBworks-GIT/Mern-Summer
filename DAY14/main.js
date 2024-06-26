require("dotenv").config();//keep on top akways
const {productsCollection}=require("./database/db.js");
const express = require('express');

const app = express();

app.use(express.json());

app.get("/products",async(req,res)=>{
  const  products1= await productsCollection.find().toArray();//to array to get all data at once 
  res.json({
    status : "success",
    data : {
      products : products1
    },
  })
})
app.post("/products",async (req,res)=>{
  const body = req.body;
  if(!body.title || !body.price ){
    res.status(400);
    res.json({
      status : "Galat",
      message : "Title and price are required"
    })
    return;
  }
  const result  = await productsCollection.insertOne(body);
  res.json({
    status: "Sahi kiya",
    data : {
      product : result,
    }
  })
}) 

app.listen(process.env.PORT,()=>{
  console.log(`App is running on port ${process.env.PORT}`);
});



