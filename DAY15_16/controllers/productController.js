const { productModel } = require('../models/productModel');


const checkId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id);
            
        if (!product) {
            res.status(404);
            res.json({
                status: "fail",
                message: "Invalid product ID",
            })
            return;
        }
        next();
    }
    catch (err) {
        if (err.name === "CastError") {
            res.status(400);
            res.json({
                status: "fail",
                "message": "Invalid Product Id"
            });
            return;
        }
        res.status(500);
        res.json({
            status: "fail",
            err: "Internal server error"
        })
    }
}

const getProducts = async (req, res) => {
    const product = await productModel.find({}).limit(10);

    // const product =  await productCollection.find().toArray();
    res.send(
        {
            status: "success",
            data: {
                products: product,
            }
        }
    );
}

const createProduct = async (req, res) => {
    try {
        const body = req.body;//came using bodyparser in main js (globally)


        const newProduct = await productModel.create(body);

        res.send({
            status: "success",
            data: {
                products: newProduct,
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error ",
            info: err,
        })
    }

}

const replaceProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const newProduct = await productModel.findOneAndReplace({ _id: id }, body, { new: true });
        res.status(201);
        res.json({
            status: "success",
            data: {
                product: newProduct,
            }

        })
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal server error",
            info: err,
        })
    }
}
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        body.updatedAt =Date.now();
        const newProduct = await productModel.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        res.status(200);
        res.json({
            status: "success",
            data: {
                product: newProduct,
            }
        })

    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal server error",
            info: err,
        })
    }
}
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.findByIdAndDelete(id);
        res.status(201);
        res.json({
            status: "success",
            data: {
                products: product,
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal server error",
            info: err,
        })
    }
}

const listProducts = async(req,res)=>{
    const {limit: pizzaLimit = 10 , ...filters} = req.query; // limit as 10 and pizzaLimit is alias

    const pizzaQuery = productModel.find(filters);

    // const limitedPizzas =await pizzaQuery.limit(query.limit || 10);// always write await when ending the query in last line of query
    const limitedPizzas =await pizzaQuery.limit(pizzaLimit); // try to use destructuring 
    res.json({
        status : "success",
        data : {
            pizzas : limitedPizzas,
        }
    })

}

module.exports = { getProducts, createProduct, replaceProduct, updateProduct, deleteProduct ,checkId ,listProducts};