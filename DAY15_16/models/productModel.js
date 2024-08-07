const mongoose = require('mongoose');
// const productSchema = new mongoose.Schema({
//     desciption : String,
//     title : {
//         type : String,
//         required :true,
//     },
//     price:{
//         type : Number,
//         required : true,
//     },
//     thumbnail:{
//         type : String,
//     },
//     images : [],
//     metaData : {},
//     
// })

const productSchema = new mongoose.Schema({
    pizza_name : String,
    pizza_category : String,
    pizza_size : String,
    total_price : Number,
})

const productModel = mongoose.model("pizzas", productSchema);


module.exports= {productModel};