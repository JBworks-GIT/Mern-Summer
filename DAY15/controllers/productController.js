const {productModel} = require('../models/productModel');

const getProducts = async (req,res)=>{
    const product = await productModel.find({});

    // const product =  await productCollection.find().toArray();
    res.send(
        {
            status : "success",
            data: {
                products : product,
            }
        }
    );
}

const createProduct = async (req,res)=>{
    try{
    const body = req.body;//came using bodyparser in main js (globally)


    const newProduct = await productModel.create(body);

    res.send({
        status : "success",
        data: {
            products : newProduct,
        }
    })
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({
            status : "fail",
            message : "Internal Server Error ",
            info : err,
        })
    }

}

const replaceProduct = async (req,res)=>{
    try{
    const {id} = req.params;
    const body = req.body;
    const newProduct = await productModel.findOneAndReplace({_id : id},body,{new : true});
    res.status(201);
    res.json({
        status : "success",
        data: {
            product : newProduct,
        }

    })
}
catch(err){
    console.log(err);
    res.status(500);
    res.json({
        status : "fail",
        message : "Internal server error",
        info :err,
    })
}
}
const updateProduct = async(req,res)=>{
    const {id} = req.params;
    const body = req.body;
    try {
        const product = await productModel.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        res.status(201);
        res.json({
            status : "success",
            data:{
            products : product,
            }
        })

    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({
            status : "fail",
            message : "Internal server error",
            info :err,
    })
}}
const deleteProduct=async (req,res)=>{
    const {id} = req.params;
    try{    
        const product = await productModel.findByIdAndDelete(id);
        res.status(201);
        res.json({
            status : "success",
            data:{
                products : product,
            }
        })
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({
            status : "fail",
            message : "Internal server error",
            info :err,
    })
    }
}

module.exports ={getProducts , createProduct, replaceProduct ,updateProduct,deleteProduct};