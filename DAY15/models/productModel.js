const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    desciption : String,
    title : {
        type : String,
        required :true,
    },
    price:{
        type : Number,
        required : true,
    },
    thumbnail:{
        type : String,
    },
    images : [],
    metaData : {},
    createdAt:{
        type: Date,
        default :Date.now(),
    },
    updatedAt:{
        type: Date,
        default : Date.now(),
    },
})


const productModel = mongoose.model("product", productSchema);


module.exports= {productModel};