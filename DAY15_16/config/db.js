// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');


// const username = "root";
// const password = "root";
// const dbName = "LPU_MERN";


const uri = "mongodb+srv://<username>:<password>@cluster0.nbm9ena.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=Cluster0";


let dbUrl = uri.replace("<username>",process.env.DB_USERNAME);
dbUrl = dbUrl.replace("<password>",process.env.DB_PASSWORD);
dbUrl = dbUrl.replace("<dbName>",process.env.DB_NAME);




mongoose.connect(dbUrl).then(()=>{
    console.log("----------------------DB Connected------------------");
}).catch((err)=>{
    console.log("DB Connect Failed:\n");
    console.log(err);
})



//using pure mongoDB
// const client = new MongoClient(dbUrl);

// const database = client.db("LPU_MERN");
// const productCollection = database.collection("products");

// module.exports = {
//     productCollection,
// }