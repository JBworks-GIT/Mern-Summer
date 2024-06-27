const {productCollection}  = require("../config/db");


const getProducts = async (req,res)=>{
    const product =  await productCollection.find().toArray();
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
    const body = req.body;//came using bodyparserin main js (globally)


    const newProduct = await productCollection.insertOne(body);

    res.send({
        status : "success",
        data: {
            product : newProduct,
        }
    })

}

module.exports ={getProducts , createProduct};