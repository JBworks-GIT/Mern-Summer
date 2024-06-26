const {productsCollection}=require("../database/db.js");


const getProduct =async(req,res)=>{
    const  products1= await productsCollection.find().toArray();//to array to get all data at once 
    res.json({
      status : "success",
      data : {
        products : products1
      },
    })
  }

  const createProducts = async (req,res)=>{
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
  }
  module.exports= {getProduct,createProducts};